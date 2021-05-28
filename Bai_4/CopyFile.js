const fs = require('fs');
fs.copyFile('newfile.txt', 'copynewfile.txt', (err) => {
if (err) {
throw err;
}
console.log('File is copied!');
});