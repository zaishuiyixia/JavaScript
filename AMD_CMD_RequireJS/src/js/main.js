/*
* @Author: Administrator
* @Date:   2017-12-12 22:56:21
* @Last Modified by:   Administrator
* @Last Modified time: 2017-12-12 22:56:48
*/
 requirejs.config({
  baseUrl: 'src/js',
  paths: {
    jquery: 'lib/jquery'
  }
})

requirejs(['app/index']);