var webpack  = require('webpack');
var wpServer = require('webpack-dev-server');
var config = require('./webpack.config.js');
var server = new wpServer(webpack(config), {
    inline: true,
    hot: true,
    filename: config.output.filename,
    publicPath: config.output.publicPath,
    stats: { colors: true },
});
server.listen(8080, "localhost", function() {});