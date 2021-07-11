# 学习项目

## IDE

### vscode

- Chinese (Simplified) Language Pack for Visual Studio Code
  - 说明：适用于 VS Code 的中文（简体）语言包。

- EditorConfig for VS Code
- Prettier - Code formatter
- ESLint

## 设置浏览器和 Node 版本

- browserslist
  - 说明：在不同的前端工具之间共用目标浏览器和 node 版本的配置工具，用于限定浏览器和 node 版本范围。
  - 配置
    - .browerslistrc
    - 优先级
      - babel 或者 babel-loader 的 presets 预设参数 targets > .browerslistrc，没设置 target 则取 .browerslistrc。

## 代码转换

- babel
  - 说明：用于转换代码。
  - 配置
    - .babelrc
    - 除了 .babelrc 文件设置的配置，webpack 配置文件的 babel-loader 的 options 属性可以更细粒度设置适配 babel-loader test 指定的文件的转换配置。

## 代码 OOP

- typescript
  - 说明：设置类型声明，以及新增 OOP 高级语法等等。
  - 配置文件
    - tsconfig.json：ts-loader 也是使用该配置文件。


## 代码检查和格式化

- editorconfig
  - 说明：用来抹平编辑器差异的，比如文件编码，缩进格式等。
  - 配置
    - .editorconfig

- eslint
  - 说明：关注于代码质量校验和代码格式校验，配合插件支持 autoFix 和错误提示，完全可插拔。
  - 配置
    - .eslintrc.js
    - .eslintrcignore

- prettier
  - 说明：关注代码格式，也支持自动修复，规则和 ESLint 不同。
  - 配置
    - .prettierrc.js
    - .prettierignore

- 优先级
  - 设置 .eslintrc.js 的 extends 的 "plugin:prettier/recommended" 作为最后的继承配置文件使得 prettier 高于 eslint 的其它继承配置，但低于 rules 设置的配置，具体查看 eslint 的相关文档。
  - 编辑时 .editorconfig 优先级高于 prettier，保存进行格式化时 prettier 优先级高于 .editorconfig。

> 注意：改动 .prettierrc.js 相关配置需要重启 vscode 方可生效。

## 代码打包

- webpack
  - 说明：代码打包工具。
  - 配置
    - webpack.config.js

## javascript 库

- react
- mobx

## 文档

- README.md：项目概述。
- CHANGELOG.md：项目更新概述。

## 代码版本控制工具

- git
  - 说明：版本控制工具。
  - 配置
    - .git 文件目录（隐藏文件目录）
      - .git/config：git 项目配置
    - .gitignore

- husky
  - 说明：git 钩子处理工具
  - 配置
    - .husk
      - .husk/pre-commit：设置 git pre-commit 的相关脚本。
  - 注意
    - 实践
      - 安装：- npm install --save-dev husky。
      - 生成 husk 配置目录：.husky -  npx husk install。
      - 生成 git pre-commit 钩子脚本配置文件：npx husky add .husky/pre-commit。
      - .husky/pre-commit 文件配置脚本：npm run eslint:fix。

## 代码仓库

- github
  - 说明：代码仓库。

## 项目

- npm run dev：启动开发环境。
- npm run build：生成打包文件。
- eslint:fix：eslint 检测项目代码。

## checklist

- 修正 package.json 的 version、description。
- 修正 README.md CHANGELOG.md。

## 改进

- 新增徽标，使用 shields.io 添加 GitHub 项目徽标
- 新增单元测试。
- 新增 sass、stylelint，stylelint 接入 vscode 检测并保存格式化。
- 新增 eslint 对 html 文件的检测，以及接入 vscode 保存自动格式化。
- 更换代码仓库到 gitlab，新增 gitlab-ci 流水线 CICD
