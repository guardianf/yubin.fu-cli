const path = require('path');
const { Command } = require('commander');
const { version } = require('../package.json');
// const chalk = require('chalk');

const program = new Command();

const mapActions = {
  "ls": {
    command: "ls [folder]",
    desc: "列出文件夹下的文件",
    action: (folder='') => {
      console.log(`列出${folder}下的文件`)
    }
  },
  "create": {
    command: "create",
    desc: 'Generate a new project from a template',
    action: (projectname) => {
      const c = require('./create.js')
      c.create()
    }
  },
  "ver": {
    command: 'ver',
    desc: '列出版本号',
    action: () => {
      console.log(`版本号为: ${ version }`);
    }
  },
  "*": {
    command: '',
    desc: 'command not supported',
    action: () => {
      console.log('do nothing');
    }
  }
}
Reflect.ownKeys(mapActions).forEach((item, i) => {
  const { command, desc, action } = mapActions[item];
  if (command) {
    program
      .command(command)
      .description(desc)
      .action(action);
  }
});


program.parse(process.argv);
