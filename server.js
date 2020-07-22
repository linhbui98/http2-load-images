const Express = require('express');
const Spdy = require('spdy');
const Https = require('https');
const path = require('path')
const { certificate } = require('./shared');
const config = require('./config')
const PORT_HTTP2 = config.portHttp2 || 3000;
const indexRoute = require('./routes/index');

// HTTP2
const http2app = Express();
http2app.set('views', path.join(__dirname, 'views'));
http2app.set('view engine', 'pug');
http2app.get('/', indexRoute)

Spdy.createServer(certificate, http2app).listen(PORT_HTTP2, () => {
    console.log(`Running app http2`)
});