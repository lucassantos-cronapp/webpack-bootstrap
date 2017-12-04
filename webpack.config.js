var path = require('path');

// index.html
var HtmlWebpackPlugin = require('html-webpack-plugin');
var indexHtml = new HtmlWebpackPlugin({
  template: 'src/index.html',
  filename: 'index.html',
  inject: true
});

var isBootstrapResource = function(resource) {
  return resource.indexOf('node_modules/bootstrap/fonts') >= 0;
}

module.exports = {

  entry : "./src/entry.js",

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use : ['style-loader', 'css-loader'],
      },
      {
        test : /\.(woff|woff2|eot|ttf|otf)$/,
        use : {
          loader : 'file-loader',
          options : {
            name : './font/[name].[ext]'
          }
        }
      },
      {
        test : /\.(png|svg|jpg|gif)$/,
        use : {
          loader : 'file-loader',
          options : {
            name : './image/[name].[ext]'
          }
        }
      }
    ]
  },

  plugins: [
    indexHtml
  ]

}