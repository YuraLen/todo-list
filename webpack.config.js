const path = require('path');

const getScssLoaders = (isProd) => {
  const def = !isProd
      ? [{loader: 'style-loader'}]
      : [MiniCssExtractPlugin.loader];

  def.push({
      loader: 'css-loader',
      //раскоментировать чтобы заработали модульные стили
      options: {
          modules: {
              localIdentName: localIdentClassesName(isProd)
          }
      }
  });
}
module.exports = (env, options) => {
const conf = {
    entry: {
        main: path.resolve(__dirname, './src/App.js'),
    },
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: '[name].bundle.js',
    },

    module: {
      rules: [
          // JavaScript
          {
              test: /\.(scss)$/,
              use: getScssLoaders(isProd),
              exclude: /node_modules/
          },
          {
              test: /\.(css)$/,
              use: getCssLoaders(isProd)
              // exclude: /node_modules/,
          },
      ],
  },    
  
};

return conf;
};
