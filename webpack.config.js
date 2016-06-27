var webpack = require('webpack');

if (!process.env.MDB_API_KEY) {
  console.warn("MovieDB API KEY NEEDED.");
  console.log("Set key 'MDB_API_KEY' in your environmental variables.");
  console.log("Exiting...");
  process.exit(0);
}

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  module: {
    loaders: [{
      test: /.js?$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel'
    }]
  },
  resolve: {
    extensions: ['',  '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'env': {
        'MDB_API_KEY': `'${process.env.MDB_API_KEY}'`
      }
    })
  ]
};
