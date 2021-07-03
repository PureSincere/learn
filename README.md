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
  - 设置 .eslintrc.js 的 extends 的 "plugin:prettier/recommended" 作为最后的继承配置文件高于 eslint 的其它继承配置，但低于 rules 设置的配置。
  - 设置

## 改进

- 梳理下完整技术栈
- 梳理下 pretty、eslint、vscode 自动保存格式化的冲突
