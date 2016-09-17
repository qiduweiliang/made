var path = require('path');
var webpack = require('webpack');


module.exports = {
    entry: [
      'webpack/hot/dev-server',
      path.resolve(__dirname, 'src/index.js')],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    devtool: 'cheap-module-source-map',
    devServer: {
    publicPath: "/static/",
    stats: { colors: true },
    port: 3000,
    inline: true,
    hot:true,
    historyApiFallback:true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve:{
    extensions:["",".js",".jsx"],
  },
  module:{
    loaders:[
      {
        test:/\.js$/,
        exclude:/node_modules/,
        loader:"babel-loader"
      },
      {
      test: /\.css/,
      loader: 'style!css!autoprefixer'
    },
    {
      test: /\.(woff|woff2|ttf|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url?limit=10000"
    }
    ]
  }
};
