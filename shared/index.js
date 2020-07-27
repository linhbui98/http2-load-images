const Fs = require('fs');
const Mime = require('mime')
const Path = require('path')

const imagesDir = `${__dirname}/../assets/`;

module.exports = {
    certificate: {
        key: Fs.readFileSync(`${__dirname}/../certificate/private.key`),
        cert: Fs.readFileSync(`${__dirname}/../certificate/certificate.crt`)
    },
    getFile: (reqPath) => {
        const filePath = Path.join(imagesDir, reqPath);
        const content = Fs.readFileSync(filePath);
        return {
            content,
            contentType: Mime.getType(filePath)
        }
    }
}