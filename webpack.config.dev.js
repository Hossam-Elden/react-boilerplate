import path from 'path'
import  webpack from 'webpack';

export default {
    devtools: 'eval-source-map',
    entry: [
        'webpack-hot-middleware/client?reload=true',
        path.join(__dirname, '/client/index.js')
    ],
    output: {
        path: '/',
        filename: 'bundle.js',
        publicPath: '/'

    },
    plugins: [
        new webpack.NoErrorsPlugin(),
       // new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: [
                    path.join(__dirname, 'client'),
                ],
                loaders: [  'babel-loader' ]
            }
        ]
    },
    resolve: {
        extensions: [ '', '.js' ]
    }
}