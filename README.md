# 学习项目

## 代码检查和格式化

- editorconfig
  - 说明：用来抹平编辑器差异的，比如文件编码，锁进格式等。
  - 配置文件
    - .editorconfig

- eslint
  - 说明：关注于代码质量校验和代码格式校验，配合插件支持 autoFix 和错误提示，完全可插拔。
  - 配置文件
    - .eslintrc.js
    - .eslintrcignore

- prettier
  - 说明：关注代码格式，也支持自动修复，规则和 ESLint 不同。
  - 配置文件
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
