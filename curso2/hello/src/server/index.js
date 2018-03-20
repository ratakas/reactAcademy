// Dependencies
import express from 'express';
import webpack from 'webpack';
import path from 'path';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import open from 'open';


//webpack configurations
import webpackConfig from '../../webpack.config.babel';

//environment

const isDevelopment = process.env.NODE_ENV !== 'production';

//server port
const port=3000

//server express
const app=express()

//webpack compiler
const webpackCompiler=webpack(webpackConfig);


//

//webpack middleware
if (isDevelopment) {
	app.use(webpackDevMiddleware(webpackCompiler));
	app.use(webpackHotMiddleware(webpackCompiler));
}

//send traffic to reack
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(port,err=>{
	if (!err) {
		open(`http://172.16.16.181:${port}`);
	}
});