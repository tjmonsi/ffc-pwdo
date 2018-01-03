const fs = require('fs');
const path = require('path');
const files = fs.readdirSync(path.resolve(__dirname, './system/tasks'));

files.forEach((task) => {
  require(`${__dirname}/system/tasks/${task}`);
});
