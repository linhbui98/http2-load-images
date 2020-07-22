const Express = require('express');
const Spdy = require('spdy');
const path = require('path')
const { certificate } = require('./shared');
const config = require('./config')
const PORT = config.port || 3000;
const indexRoute = require('./routes/index');

// HTTP2
const http2app = Express();
http2app.set('views', path.join(__dirname, 'views'));
http2app.set('view engine', 'pug');
http2app.get('/', indexRoute)

Spdy.createServer(certificate, http2app).listen(process.env.PORT, () => {
    console.log(`Running app http2`)
});