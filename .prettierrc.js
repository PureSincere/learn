module.exports = {
  printWidth: 100, // 超过最大值换行
  tabWidth: 2, // 缩进字节数
  useTabs: false, // 缩进不使用 tab，使用空格
  semi: true, // 句尾添加分号
  singleQuote: false, // 开启单引号代替双引号开关
  proseWrap: "preserve", // 默认值。因为使用了一些折行敏感型的渲染器（如 GitHub comment）而按照 markdown 文本样式进行折行
  arrowParens: "avoid", //  (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
  bracketSpacing: true, // 在对象，数组括号与文字之间加空格 { foo: bar }
  // disableLanguages: ["vue"], // 不格式化 vue 文件，vue 文件的格式化单独设置
  endOfLine: "auto", // 结尾是 \n \r \n\r auto
  eslintIntegration: false, // 不让 prettier 使用 eslint 的代码格式进行校验
  htmlWhitespaceSensitivity: "ignore",
  ignorePath: ".prettierignore", // 不使用 prettier 格式化的文件填写在项目的 .prettierignore 文件中
  jsxBracketSameLine: false, // 在 jsx 中把 ">" 是否单独放一行
  jsxSingleQuote: false, // 在 jsx 中使用单引号代替双引号
  // parser: "babylon", // 格式化的解析器，默认是babylon
  requireConfig: false, // Require a 'prettierconfig' to format prettier
  stylelintIntegration: false, //不让 prettier 使用 stylelint 的代码格式进行校验
  trailingComma: "none", // 在对象或数组最后一个元素后面是否加逗号（在ES5中加尾逗号）
  tslintIntegration: false // 不让 prettier 使用 tslint 的代码格式进行校验
}
