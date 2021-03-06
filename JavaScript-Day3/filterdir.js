const fs = require("fs");
const { resolve } = require("path");
const util = require("util");

// Promise agtig
const readdir = util.promisify(fs.readdir);

// Omskriv til promises
function filterDir(path, ext, cb) {
  fs.readdir(path, (err, b) => {
    if (err) {
      cb(err);
    }
    const filtered = b.filter((f) => f.endsWith(ext));
    cb(null, filtered);
  });
}

function filterDirMyPromise(path, ext) {
    return new Promise((resolve, reject) => {
        filterDir(path, ext, (err, files) => {
            if(err) {
                reject(err);
            }
            resolve(files);
        });

        // resolve returnerer et promise med resultat
        // reject returnerer hvis der kommer en fejl
    })
}

function filterDirP(path, ext) {
    return readdir(path)
    .then(files => {
        const filtered = files.filter((f) => f.endsWith(ext));
        return filtered;
    })
}





/* filterDirP("path",".js")
.then(files => console.log(files))
.catch(err => {})

try {
    const files = await filterDirP(...filterDirP);
    console.log(files);
} catch (err) {

} */

//console.log(module.exports)
module.exports.filterDir = filterDir;
/* module.exports = {
    filterDir
} */
module.exports.filterDirP = filterDirP;
module.exports.filterDirMyPromise = filterDirMyPromise;
//console.log(module.exports)