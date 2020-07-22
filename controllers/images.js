const config = require('../config')
const { getFile } = require('../shared');

module.exports = {
    getImages: (req, res) => {
        const host = req.headers.host;
        for (let i = 1; i <= 100; i++) {
            const assetPath = `/download (${i}).jpeg`;
            const file = getFile(assetPath);
            const stream = res.push(assetPath, {
                request: { accept: '*/*' },
                response: { 'content-type': file.contentType }
            });
            stream.end(file.content)
        }
        res.render('index', {
            title: 'HTTP/2',
            host: host,
        })
    }
};