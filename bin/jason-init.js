const program = require('commander');
const chalk = require('chalk');
const path = require('path');

program
  .usage('<template-name> <project-name>')
  .parse(process.argv);

program.on("--help", function() {
  console.log('    Examples:');
  console.log(chalk.grey('    #create a vue frame'))
  console.log(chalk.green('    $ jason init website'))
})

let template = program.args[0]

let projectName = program.args[1]

let to = path.resolve(projectName)
