module.exports = {
 entry: ["./global.js" , "./index.js"],
 output: {
   filename: "bundle.js",
   path: './dist',
   publicPath : '/dist/'
 },
 watch: true,
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