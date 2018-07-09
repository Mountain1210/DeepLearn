var path = require("path");
var glob = require("glob");
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
// var FileListPlugin=require('./webpackPlus/FileListPlugin.js')


function getView(globPath,flag){
    let files = glob.sync(globPath);

    let entries = {},
    entry, dirname, basename, pathname, extname;

    files.forEach(item => {
        entry = item;
        dirname = path.dirname(entry);//当前目录
        extname = path.extname(entry);//后缀
        basename = path.basename(entry, extname);//文件名
        pathname = path.join(dirname, basename);//文件路径
        if (extname === '.html') {
            entries[pathname] = './' + entry;
        } else if (extname === '.js') {
            entries[basename] = entry;
        }
    });

    return entries;
}
let entriesObj = getView('./js/*.js');
console.log("==========================================")
console.log(entriesObj)
console.log("==========================================")
let config = {
  devtool: 'eval-source-map',
  entry: entriesObj,
  output: {
    //单页filename: 'bundle.js'
    path: path.join(__dirname, 'dist'),
    filename:"[name].js"
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
     },
  plugins:[
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            chunks:['index'],
            hash: true,
            minify: {
                removeAttributeQuotes:true,
                removeComments: true,
                collapseWhitespace: true,
                removeScriptTypeAttributes:true,
                removeStyleLinkTypeAttributes:true
            }
        }),
        new HtmlWebpackPlugin({
            filename: 'info.html',
            template: './src/info.html',
            hash: true,
            chunks:['info']

        })
    ]
};
let pages = Object.keys(getView('./src/*.html'));
// console.log(pages)
pages.forEach(pathname => {
    console.log(pathname)
    let htmlname = pathname.split('src\\')[1];
    console.log(htmlname)
    let conf = {
        filename: `${htmlname}.html`,
        template: `${pathname}.html`,
        hash: true,
        chunks:[htmlname],
        minify: {
              removeAttributeQuotes:true,
              removeComments: true,
              collapseWhitespace: true,
              removeScriptTypeAttributes:true,
              removeStyleLinkTypeAttributes:true
          }
    }
    console.log(conf)
    config.plugins.push(new HtmlWebpackPlugin(conf));
});
module.exports = config
