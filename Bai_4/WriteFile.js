const fs = require('fs');
fs.writeFile('WriteFile.txt', 'Hello Word!', (err) => {
if (err) {
throw err;
}
console.log('Saved!'); });