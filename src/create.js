const chalk = require('chalk');
const ora = require('ora')
const inquirer = require('inquirer');
const fse = require('fs-extra');
const download = require('download-git-repo')
const menFs = require('mem-fs');
const editor = require('mem-fs-editor');
const { exec } = require('child_process');
const path = require('path')

TEMPLATE_GIT_REPO = 'https://github.com/guardianf/jason-vue-template.git'

async function downloadGitRepo() {
  return new Promise((resolved, reject) => {
    const downloadPath = path.join(__dirname, '__download__');
    if (fse.existsSync(downloadPath)) {
      await cleanFolder(downloadPath);
    }
    await exec(`git clone ${TEMPLATE_GIT_REPO} ${downloadPath}`, err => {
      if (err) {
        reject(err);
      } else {
        resolved(downloadPath);
      }
    });
  })
}
function cleanFolder(path) {
  return new Promise((resolved, reject) => {
    exec(``)
  })
}

module.exports = {
  create: async projectname => {
    const process = ora(chalk.green(`start building project ${projectname}`))
    process.start();
    // inquirer.prompt([{
    //   type: 'input',
    //   name: 'projectName',
    //   message: '请输入项目名称',
    //   validate(input) {
    //     if (!input) {
    //       return '项目名称不能为空'
    //     }
    //     if (fse.existsSync(input)) {
    //       return '当前目录已存在同名项目，请更换项目名'
    //     }
    //     return true;
    //   }
    // }]).then(res => {
    //   const { projectName } = res;
    // }).catch(err => {
    //   return err;
    // })
    //下载

    downloadGitRepo();
    process.succeed('完成');

    // process.start();
    // inquirer.prompt([{
    //   type: 'input',
    //   name: 'projectName',
    //   message: '请输入项目名称',
    //   validte(input) {
    //     if (!input) {
    //       return '项目名称不能为空'
    //     }
    //     if (fse.existsSync(input)) {
    //       return '当前目录已存在同名项目，请更换项目名'
    //     }
    //     return true;
    //   }
    // }]).then(() => {
    //   console.log(chalk.green(`end`))
    // }).catch(error => {
    //   console.log(chalk.error(`error msg: %o`, console.error()))
    // })
  }
}
