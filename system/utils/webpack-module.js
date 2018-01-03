module.exports = () => {
  const babelOptions = {
    presets: [
      require('babel-preset-env')
    ],
    plugins: [require('babel-plugin-syntax-dynamic-import'), [
      require('babel-plugin-transform-runtime'),
      {
        helpers: false,
        polyfill: false,
        regenerator: true
      }
    ]]
  };

  return {
    rules: [
      {
        // If you see a file that ends in .html, send it to these loaders.
        test: /\.html$/,
        // This is an example of chained loaders in Webpack.
        // Chained loaders run last to first. So it will run
        // polymer-webpack-loader, and hand the output to
        // babel-loader. This let's us transpile JS in our `<script>` elements.
        use: [
          {
            loader: 'babel-loader',
            options: babelOptions
          },
          {
            loader: 'polymer-webpack-loader',
            options: {
              processStyleLinks: true
            }
          }
        ]
      },
      {
        // If you see a file that ends in .js, just send it to the babel-loader.
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: babelOptions
        }
      },
      {
        // If you see a file that ends in .js, just send it to the babel-loader.
        test: /\.ejs$/,
        use: [
          {
            loader: 'ejs-loader'
          }
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              useRelativePath: true,
              name: '[name].[ext]'
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              gifsicle: {
                optimizationLevel: 2
              },
              optipng: {
                optimizationLevel: 5
              },
              mozjpeg: {
                quality: 70,
                progressive: true
              },
              svgo: {
                plugins: [
                  {removeViewBox: true},
                  {cleanupIDs: false}
                ]
              },
              webp: {
                quality: 70,
                method: 5,
                size: 60000
              }
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'to-string-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'to-string-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      }
    ]
  };
};
