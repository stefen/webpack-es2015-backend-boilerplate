'use strict';

let path = require('path');
let fs = require('fs');

let nodeModules = {};

fs.readdirSync('node_modules')
    .filter( (x) => ( ['.bin'].indexOf(x) === -1 ) )
    .forEach( mod => { nodeModules[mod] = 'commonjs ' + mod });

module.exports = {
    target: "node",
    entry: "./src/app.js",
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "app.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel' }
        ]
    },
    externals: nodeModules
};
