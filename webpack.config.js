var path = require("path");
var webpack = require('webpack');
module.exports = {
  devtool: 'eval-source-map',
  entry: './es5.js',
  output: {
    filename: 'bundle.js'
  },
  module:{  
         rules:[  
             {  
                 test:/.js$/,
                 loaders:["babel-loader"],
                 exclude:"/node_modules/",
                 include:path.resolve(__dirname,"/es6/")
             }  
         ]  
     }  
};