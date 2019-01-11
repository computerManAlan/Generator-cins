'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`欢迎使用${chalk.red('cins')} 脚手架!`)
    );

    const prompts = [
      {
        type: 'input',
        name: 'projectName',
        message: '请输入您的项目名',
        default: 'default projectName'
      },{
        type: 'input',
        name: 'name',
        message: '请输入您的名字',
        default: 'default name'
      },{
        type: 'input',
        name: 'description',
        message: '请输入您的项目描述',
        default: 'default description'
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copy(
      this.templatePath('README.md'),
      this.destinationPath('README.md')
    );
    this.fs.copy(
      this.templatePath('index.tpl.html'),
      this.destinationPath('index.tpl.html')
    );
    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'),{
        projectName: this.props.projectName,
        name: this.props.name,
        description: this.props.description
      }
    );
    this.fs.copy(
      this.templatePath("src"),
      this.destinationPath("src")
    );
    this.fs.copy(
      this.templatePath(".babelrc"),
      this.destinationPath(".babelrc")
    );
    this.fs.copy(
      this.templatePath("feflow.json"),
      this.destinationPath("feflow.json")
    );
  }

  end(){
    this.log(
      yosay("cins脚手架已搭建完成,使用命令npm install 安装基本依赖！")
    )
  }
};
