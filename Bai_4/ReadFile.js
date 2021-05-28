const fs = require('fs');
fs.readFile('./lorem.txt', (err, data) => {
if(err) {
return console.log('Error occurred while reading file');
}
console.log(data.toString());
});

//the same is above
/*const fs = require('fs');
const data = fs.readFileSync('./lorem.txt');
console.log(data.toString());*/
