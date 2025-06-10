function readFileSync(filePath) {
    const fs = require('fs');

    try {
        const data = fs.readFileSync(filePath, 'utf8');
        return data;
    } catch (error) {
        console.error(`Error reading file from disk: ${error}`);
        return null;
    }
}

module.exports = readFileSync;