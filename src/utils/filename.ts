import {endsWith} from 'lodash'

export function ensureExt(filename: string, ext: string): string {
  if (!endsWith(filename, ext)) return filename + ext
  return filename
}
