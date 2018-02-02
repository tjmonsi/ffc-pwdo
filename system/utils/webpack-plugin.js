const webpack = require('webpack');
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const Visualizer = require('webpack-visualizer-plugin');
const GenerateAssetPlugin = require('./generate-asset-plugin');
const getHTMLOptions = require('./get-html-options');
const createManifest = require('./create-manifest');

module.exports = (env) => {
  const environment = env === 'prod' ? 'production' : 'development';
  const plugins = [
    new HTMLWebpackPlugin(getHTMLOptions(env, 'index')),
    new HTMLWebpackPlugin(getHTMLOptions(env, '404')),
    new webpack.optimize.CommonsChunkPlugin({
      children: true
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../../app/node_modules/@webcomponents/webcomponentsjs/*.js'),
        to: 'webcomponentsjs/[name].[ext]'
      },
      {
        from: path.resolve(__dirname, '../../app/node_modules/@webcomponents/webcomponentsjs/*.map'),
        to: 'webcomponentsjs/[name].[ext]'
      },
      {
        from: path.resolve(__dirname, '../../app/images'),
        to: 'images'
      },
      {
        from: path.resolve(__dirname, '../../app/fonts'),
        to: 'fonts'
      },
      {
        from: path.resolve(__dirname, '../../data'),
        to: 'data'
      }
    ]),
    new GenerateAssetPlugin({
      filename: 'manifest.json',
      fn: (compilation, cb) => {
        cb(null, createManifest(env));
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(environment)
    }),
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map',
      module: true,
      columns: true,
      // noSources: true,
      linToLine: true
    })
  ];

  if (env === 'prod') {
    plugins.push(new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true
      },
      comments: false,
      sourceMap: true
    }));
  }

  plugins.push(new Visualizer({
    filename: './_statistic.html'
  }));

  plugins.push(new BundleAnalyzerPlugin({
    analyzerMode: 'static',
    reportFilename: './_bundle-sizes.html',
    // Module sizes to show in report by default.
    // Should be one of `stat`, `parsed` or `gzip`.
    // See "Definitions" section for more information.
    defaultSizes: 'gzip',
    // Automatically open report in default browser
    openAnalyzer: false,
    generateStatsFile: true,
    // Name of Webpack Stats JSON file that will be generated if `generateStatsFile` is `true`.
    // Relative to bundles output directory.
    statsFilename: '_statistic.json',
    statsOptions: {
      source: false,
      performance: true,
      version: true
    },
    logLevel: 'info'
  }));

  return plugins;
};
