/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {Command} from '@oclif/core'
import {boolean} from 'boolean'
import {get, has, keys, map, reverse, sortBy} from 'lodash'
import {copyFile, mkdir, readdir, readFile, writeFile} from 'node:fs/promises'
import {basename, dirname, join} from 'node:path'
import {parseStringPromise} from 'xml2js'

import {ensureExt} from '../utils/filename'

import type {
  Action,
  Conversation,
  FlagsList,
  InvokeMethod,
  Options,
} from '../types/conversation'
type CharactersMap = Record<string, Conversation[]>

interface Args {
  [name: string]: string
}

export default class Convert extends Command {
  static description = 'describe the command here'

  static examples = ['<%= config.bin %> <%= command.id %>']

  static flags = {}

  static args = [{name: 'file'}, {name: 'audioLocation'}, {name: 'output'}]

  audioCopyList: {src: string; dst: string}[] = []
  audioFileList: string[] = []

  public async run(): Promise<void> {
    const {args} = await this.parse(Convert)

    this.audioFileList = await this.buildSourceAudioFileList(args.audioLocation)

    const json = await this.readXML(args.file)

    const characters: CharactersMap = {}

    await Promise.all(
      map(
        reverse(json.DeusExConversationFile.Conversations[0].Conversation),
        async con => {
          const owner = con.owner[0].Item[0].$.Value
          const name = con.$.name

          // this.log('[Conv]', name)

          const convObject: Conversation = {
            Name: name,
            ConvName: name,
            Owner: owner,
            RequiredFlags: this.getRequiredFlags(con),
            InvokeMethods: this.getInvokeMethods(con),
            Options: this.getOptions(con),
            Actions: this.getActions(args, con),
          }

          if (owner in characters) {
            characters[owner].push(convObject)
          } else {
            characters[owner] = [convObject]
          }
        },
      ),
    )

    await this.writeJSON(args, characters)

    await this.processAudioFileCopy()
  }

  async readXML(filename: string): Promise<any> {
    const content = await readFile(filename).then(b => b.toLocaleString())

    return parseStringPromise(content, {})
  }

  async writeJSON(args: Args, characters: CharactersMap): Promise<void> {
    await Promise.all(
      map(keys(characters), async c => {
        const content = JSON.stringify(characters[c], null, 2)
        await writeFile(
          this.getOutputFilename(args.output, args.file, c),
          content,
        )
      }),
    )

    this.log(`✅ ${keys(characters).length} Conv per character created !`)
  }

  async processAudioFileCopy(): Promise<void> {
    await Promise.all(
      map(this.audioCopyList, async ({src, dst}) => {
        await mkdir(dirname(dst), {recursive: true})
        await copyFile(src, dst)

        // this.log('[Copy]', basename(src), basename(dst))
      }),
    )

    this.log(`✅ ${this.audioCopyList.length} Files copied !`)
  }

  async buildSourceAudioFileList(directory: string): Promise<string[]> {
    let list = await readdir(directory)

    list = sortBy(list, f => {
      const parts = f.split('_')
      return parts.length > 1 ? Number.parseInt(parts[1], 10) : f
    })

    list = map(list, f => join(directory, f))

    return list
  }

  getActions(args: Args, con: any): Action[] {
    return map(con.Events[0].Event, (a): Action => {
      const actionType = a.$.EventTypeName

      if (has(a, 'mp3[0]')) {
        const src = this.audioFileList[this.audioCopyList.length]
        const dst = join(args.output, a.mp3[0])

        this.audioCopyList.push({src, dst})
      }

      if (has(a, 'Choices[0]')) {
        map(a.Choices[0].Choice, c => {
          const src = this.audioFileList[this.audioCopyList.length]
          const dst = ensureExt(join(args.output, c.mp3[0]), 'mp3')

          this.audioCopyList.push({src, dst})
        })
      }

      return {
        Type: actionType,
        Label: get(a, 'Label[0]', ''),
      }
    })
  }

  getOptions(con: any): Options {
    return {
      OnlyOnce: false,
      IsDataLink: boolean(get(con, 'infolink[0]', false)),
      NonInteractive: boolean(get(con, 'nonInteract[0]', false)),
      RemainFP: boolean(get(con, 'firstPerson[0]', false)),
      RandomCamPlacement: false,
      CanBeInterrupted: false,
      CannotBeInterrupted: false,
    }
  }

  getRequiredFlags(con: any): FlagsList[] {
    return map(
      con.flags[0].Flag,
      (f: any): FlagsList => ({
        FlagName: f.$.Name,
        FlagValue: boolean(f.$.Value),
      }),
    )
  }

  getInvokeMethods(con: any): InvokeMethod[] {
    const InvokeMethods: InvokeMethod[] = []

    if (has(con, 'pcBumps[0]')) {
      InvokeMethods.push({Type: 'Bumps', Radius: 0})
    }

    if (has(con, 'pcFrobs[0]')) {
      InvokeMethods.push({Type: 'Frobs', Radius: 0})
    }

    if (has(con, 'npcEnters[0]')) {
      InvokeMethods.push({Type: 'EnterRadius', Radius: con.distance[0]})
    }

    return InvokeMethods
  }

  getOutputFilename(
    directory: string,
    filename: string,
    character: string,
  ): string {
    return join(directory, `${basename(filename, '.xml')}_${character}.json`)
  }
}
