oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g dxcon2json
$ dxcon2json COMMAND
running command...
$ dxcon2json (--version)
dxcon2json/0.0.0 win32-x64 node-v16.18.0
$ dxcon2json --help [COMMAND]
USAGE
  $ dxcon2json COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`dxcon2json convert [FILE] [AUDIOLOCATION] [OUTPUT]`](#dxcon2json-convert-file-audiolocation-output)
* [`dxcon2json help [COMMAND]`](#dxcon2json-help-command)
* [`dxcon2json plugins`](#dxcon2json-plugins)
* [`dxcon2json plugins:install PLUGIN...`](#dxcon2json-pluginsinstall-plugin)
* [`dxcon2json plugins:inspect PLUGIN...`](#dxcon2json-pluginsinspect-plugin)
* [`dxcon2json plugins:install PLUGIN...`](#dxcon2json-pluginsinstall-plugin-1)
* [`dxcon2json plugins:link PLUGIN`](#dxcon2json-pluginslink-plugin)
* [`dxcon2json plugins:uninstall PLUGIN...`](#dxcon2json-pluginsuninstall-plugin)
* [`dxcon2json plugins:uninstall PLUGIN...`](#dxcon2json-pluginsuninstall-plugin-1)
* [`dxcon2json plugins:uninstall PLUGIN...`](#dxcon2json-pluginsuninstall-plugin-2)
* [`dxcon2json plugins update`](#dxcon2json-plugins-update)

## `dxcon2json convert [FILE] [AUDIOLOCATION] [OUTPUT]`

Convert a DeusEX XML file to JSON for DXAP Project

```
USAGE
  $ dxcon2json convert [FILE] [AUDIOLOCATION] [OUTPUT]

ARGUMENTS
  FILE           The XML file
  AUDIOLOCATION  The conversation files locations
  OUTPUT         The output directory

DESCRIPTION
  Convert a DeusEX XML file to JSON for DXAP Project

EXAMPLES
  $ dxcon2json convert
```

_See code: [dist/commands/convert.ts](https://github.com/b4n92uid/dxcon2json/blob/v0.0.0/dist/commands/convert.ts)_

## `dxcon2json help [COMMAND]`

Display help for dxcon2json.

```
USAGE
  $ dxcon2json help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for dxcon2json.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.18/src/commands/help.ts)_

## `dxcon2json plugins`

List installed plugins.

```
USAGE
  $ dxcon2json plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ dxcon2json plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.7/src/commands/plugins/index.ts)_

## `dxcon2json plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ dxcon2json plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ dxcon2json plugins add

EXAMPLES
  $ dxcon2json plugins:install myplugin 

  $ dxcon2json plugins:install https://github.com/someuser/someplugin

  $ dxcon2json plugins:install someuser/someplugin
```

## `dxcon2json plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ dxcon2json plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ dxcon2json plugins:inspect myplugin
```

## `dxcon2json plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ dxcon2json plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ dxcon2json plugins add

EXAMPLES
  $ dxcon2json plugins:install myplugin 

  $ dxcon2json plugins:install https://github.com/someuser/someplugin

  $ dxcon2json plugins:install someuser/someplugin
```

## `dxcon2json plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ dxcon2json plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ dxcon2json plugins:link myplugin
```

## `dxcon2json plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ dxcon2json plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ dxcon2json plugins unlink
  $ dxcon2json plugins remove
```

## `dxcon2json plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ dxcon2json plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ dxcon2json plugins unlink
  $ dxcon2json plugins remove
```

## `dxcon2json plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ dxcon2json plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ dxcon2json plugins unlink
  $ dxcon2json plugins remove
```

## `dxcon2json plugins update`

Update installed plugins.

```
USAGE
  $ dxcon2json plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
