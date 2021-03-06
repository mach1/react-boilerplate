import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import config from './webpack.config.babel'

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(8080, 'localhost', function (err, result) {
  if (err) {
    console.log(err)
  }

  console.log('Listening at localhost:8080')
})
