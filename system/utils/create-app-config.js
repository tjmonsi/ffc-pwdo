const getConfig = require('./get-config');

module.exports = () => {
  const config = getConfig();

  return `
export default ${JSON.stringify(config.app)}
  `;
};
