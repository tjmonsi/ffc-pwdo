const getConfig = require('./get-config');

module.exports = (env) => {
  const config = getConfig();

  const routes = [];

  for (var name in config.fragments) {
    routes.push(`'${name}': () => { return import(/* webpackChunkName: "${name}" */ '${config.fragments[name]}') }`);
  }

  return `
export default {
  ${routes.join(', \n')}
}
  `;
};
