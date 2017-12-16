/*
* @Author: Administrator
* @Date:   2017-12-16 17:58:05
* @Last Modified by:   Administrator
* @Last Modified time: 2017-12-16 21:58:30
*/
var path = require('path');
module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve:{
        alias:{
            jquery:__dirname+'/src/js/lib/jquery.js'
        }
    },
     externals: {
        'jquery' : 'window.$'
    }
}