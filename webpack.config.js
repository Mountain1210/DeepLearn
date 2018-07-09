var path = require("path");
var glob = require("glob");
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
// var FileListPlugin=require('./webpackPlus/FileListPlugin.js')
//npm install extract-text-webpack-plugin@next 要执行这个东西

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
console.log(__dirname)
let config = {
  devtool: 'eval-source-map',
  entry: entriesObj,
  output: {
    //单页filename: 'bundle.js'
    path:path.resolve(__dirname,"./dist"),
		publicPath:"/assets/",
    filename:"js/[name].js?v=[hash]"
  },
  module:{
         rules:[
             {
                 test:/.js$/,
                 loaders:["babel-loader"],
                 exclude:"/node_modules/",
                 include:path.resolve(__dirname,"/es6/")
             },

             {
        			   test: /\.(png|svg|jpg|gif)$/,
        			   loader:"file-loader?name=img/[name]00000[hash].[ext]"
        			},
              {
          				//正则匹配后缀.css文件;
          				test: /\.css$/,
          				//使用html-webpack-plugin插件独立css到一个文件;
          				use: ExtractTextPlugin.extract({
          					//加载css-loader、postcss-loader（编译顺序从下往上）转译css
          					use: [{
          							loader: 'css-loader?importLoaders=1',
          						},
          						{
          							loader: 'postcss-loader',
          							//配置参数;
          							options: {
          								//从postcss插件autoprefixer 添加css3前缀;
          								plugins: function() {
          									return [
          										//加载autoprefixer并配置前缀,可加载更多postcss插件;
          										require('autoprefixer')({
          											browsers: ['ios >= 7.0']
          										})
          									];
          								}
          							}
          						}]
          				})
          			},
         ]
     },
  plugins:[
    new ExtractTextPlugin({
			filename: 'css/styles.css?v=[hash]' //设置最后css路径、名称;
		})
  ]
};
let pages = Object.keys(getView('./src/*.html'));

pages.forEach(pathname => {
    let htmlname = pathname.split('src\\')[1];
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
    config.plugins.push(new HtmlWebpackPlugin(conf));
});
console.log(config)
module.exports = config
