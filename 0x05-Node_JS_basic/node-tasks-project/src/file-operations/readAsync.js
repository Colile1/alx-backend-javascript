exports.readFileAsync = function(filePath) {
    return new Promise((resolve, reject) => {
        const fs = require('fs');

        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};