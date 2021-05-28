const fs = require('fs');
fs.rename('file.txt', 'newfile.txt', (err) => {
if (err) {
throw err;
}
console.log('File Renamed!');
});