var webpack  = require('webpack');
var path = require('path');
module.exports = {
 devtool: 'source-map',
 entry: [
   "./global.js" , "./index.js", "webpack/hot/dev-server", "webpack-dev-server/client?http://localhost:8080"
   ],
 output: {
   filename: 'bundle.js',
   path: path.join(__dirname, 'dist'),
   publicPath : '/dist/'
 },
 plugins: [new webpack.HotModuleReplacementPlugin()],
 module: {
   loaders: [
     {
       test: /\.(js|es6)$/,
       exclude: /node_modules/,
       loader: 'babel-loader',
       query: {
         presets: ['react', 'es2015'] 
       }
     }
   ]
 },
 resolve: {
   extensions: ['', '.js', '.es6']
 },
}