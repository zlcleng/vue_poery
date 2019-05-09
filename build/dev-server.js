require('./check-versions')(); // 检查 Node 和 npm 版本
var config = require('../config');
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path');
var express = require('express');
var webpack = require('webpack');
var proxyMiddleware = require('http-proxy-middleware');
var webpackConfig = require('./webpack.dev.conf');
var http = require('http');
var debug = require('debug')('zoe-manage-hos:server');

// default port where dev server listens for incoming traffic
var ports = process.env.PORT || config.dev.port;
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser;

var proxyTable = config.dev.proxyTable;

var app = express();
var compiler = webpack(webpackConfig);

//对更改的文件进行监控，编译, 一般和 webpack-hot-middleware 配合使用，实现热加载功能
//可以将编译后的文件暂存到内存中的插件
var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
});

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {
  }
});

// 当tml-webpack-plugin template更改之后，强制刷新浏览器
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({action: 'reload'});
    cb()
  })
});

// compiler.apply(new DashboardPlugin());

// 将 proxyTable 中的请求配置挂在到启动的 express 服务上
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]

  if (typeof options === 'string') {
    options = {target: options}
  }
  app.use(proxyMiddleware(options.filter || context, options))
});

// 解决history模式  问题
app.use(require('connect-history-api-fallback')());

// serve webpack bundle output
app.use(devMiddleware);
app.use(hotMiddleware);


// 拼接 static 文件夹的静态资源路径
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory);
// 静态文件服务
app.use(staticPath, express.static('./static'));


ports.forEach(function(port) {
  app.set('port', port);
  console.log('Server running at http://127.0.0.1:'+port);
  /**
   * Create HTTP server.
   */

  var server = http.createServer(app);
  /**
   * Listen on provided port, on all network interfaces.
   */
  server.listen(port);
  server.on('error', function(error){
    onError(error,port);
  });
  server.on('listening',function(){
    onListening(server)
  });
})

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening(server) {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error,port) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}


