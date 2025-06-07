const {merge} = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPLugin=require('webpack/lib/container/ModuleFederationPLugin')
const commonConfig =  require('./webpack.common');
const packageJson=require('../package.json');
packageJson.dependencies
const devConfig={
    mode:'development',
    devServer:{
        port:8080,
        historyApiFallback:{
            index:'index.html'
        },
    },
    plugins:[
        new ModuleFederationPLugin({
            name:'container',
            remotes:{
                marketing:'marketing@http://localhost:8081/remoteEntry.js',
            },
            shared:packageJson.dependencies,
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        })
    ]
}
module.exports=merge(commonConfig,devConfig)