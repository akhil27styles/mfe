const {merge} = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
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
        new ModuleFederationPlugin({
            name:'container',
            remotes:{
                marketing:'marketing@http://localhost:8081/remoteEntry.js',
            },
            shared: {
                react: {
                  singleton: true,
                  requiredVersion: packageJson.dependencies.react,
                },
                'react-dom': {
                  singleton: true,
                  requiredVersion: packageJson.dependencies['react-dom'],
                },
                'react-router-dom': {
                  singleton: true,
                  requiredVersion: packageJson.dependencies['react-router-dom'],
                },
                '@material-ui/core': {
                  singleton: true,
                  requiredVersion: packageJson.dependencies['@material-ui/core'],
                },
                '@material-ui/icons': {
                  singleton: true,
                  requiredVersion: packageJson.dependencies['@material-ui/icons'],
                },
              },              
        }),
    ]
}
module.exports=merge(commonConfig,devConfig)