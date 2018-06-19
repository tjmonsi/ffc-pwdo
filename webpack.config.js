const path = require('path');
const webpackModule = require('./system/utils/webpack-module');
const webpackPlugin = require('./system/utils/webpack-plugin');
const smallprintrc = require('./.smallprintrc');

module.exports = (env) => {
  const entry = {};
  const destFolder = env === 'prod' ? 'build' : 'public';
  const dest = path.resolve(__dirname, './', destFolder);

  for (var i in smallprintrc.source.js) {
    entry[i] = path.resolve(__dirname, './app', smallprintrc.source.js[i]);
  }

  return {
    entry,
    mode: env === 'prod' ? 'production' : 'development',
    output: {
      filename: '[name].js',
      chunkFilename: '[id].[hash].fragment.js',
      path: dest
    },
    resolve: {
      modules: [
        path.resolve(__dirname, './app/dependencies'),
        path.resolve(__dirname, './app/pages'),
        path.resolve(__dirname, './app/system'),
        path.resolve(__dirname, './app/node_modules'),
        path.resolve(__dirname, './node_modules')
      ]
    },
    module: webpackModule(env),
    plugins: webpackPlugin(env)
  };
};
