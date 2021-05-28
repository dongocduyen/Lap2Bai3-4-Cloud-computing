const fs = require('fs');
fs.open('CreatFile.txt', 'w', (err, CreateFile) => {
if (err) {
throw err;
}
console.log('Saved!');
});