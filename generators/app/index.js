// 此文件作为 Generator 的核心入口
// 需要导出一个继承自 Yeoman Generator 的类型
// Yeoman Generator 在工作时会自动调用我们在此类型中定义的一些生命周期方法
// 我们在这些方法中可以通过调用父类提供的一些工具方法实现一些功能，例如文件写入
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  prompting() {
    // Yeoman 在询问用户环节会自动调用此方法
    // 此方法中可调用父类的 prompt 方法发出对用户的命令行询问
    return this.prompt([
      {
        type: "input",
        name: "name",
        message: "Your project name",
        default: this.appname // appname 为项目生成目录名称
      }
    ]).then(answers => {
      this.answers = answers;
    })
  }

  writing() {
    // Yeoman 自动在生成文件阶段调用此方法
    
    const templates = [
      '.browserslistrc',
      '.editorconfig',
      '.env.development',
      '.env.production',
      '.eslintrc.js',
      '.gitignore',
      'babel.config.js',
      'package.json',
      'postcss.config.js',
      'README.md',
      'public/favicon.ico',
      'public/index.html',
      'src/App.vue',
      'src/main.js',
      'src/router.js',
      'src/assets/logo.png',
      'src/components/HelloWorld.vue',
      'src/store/actions.js',
      'src/store/getters.js',
      'src/store/index.js',
      'src/store/mutations.js',
      'src/store/state.js',
      'src/utils/request.js',
      'src/views/About.vue',
      'src/views/Home.vue'
    ];

    templates.forEach(item => {
      // 通过模版方式写入文件到目标目录
      this.fs.copyTpl(
        this.templatePath(item), // 模版文件路径
        this.destinationPath(item), // 输出目标路径
        this.answers // 模版数据上下文
      )
    })
  }
}