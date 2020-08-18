
const files = require.context('../service/', true, /\.js$/);

files.keys().forEach(key => {
  files(key).default
});

console.log('以下文件被加载',files.keys())
