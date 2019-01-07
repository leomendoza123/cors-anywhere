var host = process.env.HOST || '0.0.0.0'
var port = process.env.PORT || 80

var cors_proxy = require('./lib/cors-anywhere');
cors_proxy
  .createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: ['origin'],
    removeHeaders: [
    'origin',     
    'referer', 
    // Strip Heroku-specific headers
    'x-heroku-queue-wait-time',
    'x-heroku-queue-depth',
    'x-heroku-dynos-in-use',
    'x-request-start',],
  })
  .listen(port, host, function() {
    console.log('Running CORS Anywhere on ' + host + ':' + port)
  })
