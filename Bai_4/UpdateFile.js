const fs = require('fs');
fs.appendFile('UpdateFile.txt', ' Hello World :>', (err) => {
if (err) {
throw err;
}
console.log('Updated!');
})