
import express from 'express';
import  path from 'path';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import  webpackConfig from '../webpack.config.dev';
import  webpackHotMiddleWare from'webpack-hot-middleware';
const app= express();
const compiler =webpack(webpackConfig);

app.use(webpackMiddleware(compiler));
app.use(webpackHotMiddleWare(compiler,{
    hot:true,
    publicPath:webpackConfig.output.publicPath,
    noInfo:true
}));

app.get('/*', (req,res)=>{
    res.sendFile(path.join(__dirname, './index.html'));

});

app.listen(3000, () => console.log('Running on localhost:3000'));