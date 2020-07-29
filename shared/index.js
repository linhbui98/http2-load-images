const Fs = require('fs');
const Mime = require('mime')
const Path = require('path')

const imagesDir = `${__dirname}/../assets/`;
console.log("linh", imagesDir)
module.exports = {
    certificate: {
        key: Fs.readFileSync(`${__dirname}/../certificate/privkey.pem`),
        cert: Fs.readFileSync(`${__dirname}/../certificate/certificate.cer`)
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