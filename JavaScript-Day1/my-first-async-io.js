//First io:
/* const fs = require('fs');
const buff = fs.readFileSync(process.argv[2]);
const str = buff.toString();
const splitted = str.split("\n");
const num = splitted.length - 1;
console.log(num); */

const fs = require('fs');
const path = process.argv[2];
fs.readFile(path, 'utf8', function(err, data) {
    var lines = data.split('\n');
    console.log(lines.length - 1);
});