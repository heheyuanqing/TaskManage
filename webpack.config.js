module.exports = {
    entry: "./public/entry.js", // 要打包的入口文件
    output: {               //打包后的文件
        path: __dirname + '/public/dist',   //表示使用绝对路径
       filename: "index.js",//输出文件名
    },
    watch: true,
    module: {
        loaders: [            //用于加载一些静态文件夹（css样式，图片之类）
            {test: /\.css$/, loader: "style-loader!css-loader"},
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                query: {
                    cacheDirectory: true,
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
};
