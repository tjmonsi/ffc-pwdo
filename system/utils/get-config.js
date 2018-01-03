const fs = require('fs');
const path = require('path');
const smallprintrc = require('../../.smallprintrc');

module.exports = () => {
  return JSON.parse(fs.readFileSync(path.resolve(__dirname, '../..', smallprintrc.source.config)));
};
