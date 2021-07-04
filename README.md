# 学习项目

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

## checklist

- 修正 package.json 的 version、description
- 修正 UPDATE.md

## 改进

- 梳理下完整技术栈
