
const config = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/public/js',
    filename: 'bundles.js',
    publicPath: '/'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
    }
};

module.exports = config;
