const { rejects } = require('assert');
const crypto = require('crypto');

// 1a)
let size = 48;
/* require('crypto').randomBytes(size, function(err, buffer) {
  let secureHex = buffer.toString('hex');
  console.log(secureHex)
}); */
/* crypto.randomBytes(10, function(err, buffer) {
    let secureHex = buffer.toString('hex');
    console.log("Test: "+secureHex)
}); */

// 1b)
function makeSecureRandom(size) {
    return new Promise((resolve, reject) => {
        crypto.randomBytes(size, function(err, buffer) {
            if(err) {
                reject(err);
            }
            let secureHex = buffer.toString('hex');
            resolve(secureHex);
        });
    });
};

/* makeSecureRandom(5)
.then(res=>console.log("1b) Called promise: "+res))
.catch(e=>console.log(e)); */

/* Promise.all([makeSecureRandom(5), makeSecureRandom(3)])
.then((values) => {console.log("1b) Promise.all() : "+values)})
.catch(e=>console.log(e)); */

module.exports.makeSecureRandom = makeSecureRandom;