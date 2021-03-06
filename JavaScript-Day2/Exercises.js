console.log("### Simple OS-info file ###");

function osText() {
  const os = require("os");

  var platform = os.platform();
  var osType = os.type();
  var freeMemory = os.freemem();
  var totalMemory = os.totalmem();
  var eol = { es: os.EOL };

  const obje = {platform, osType, freeMemory, totalMemory, eol};

  return obje;
  /* console.log(obje);

  console.log(`Platform: ${platform}`);
  console.log(`osType: ${osType}`);
  console.log(`Free Memory: ${freeMemory}`);
  console.log(`Total Memory: ${totalMemory}`);
  console.log(`EOL: ${JSON.stringify(eol.es)}`); */
}

const objec = osText();
console.log(objec);

//module.exports = osText();

/* 
Skal være resultat:
{
  platform: 'win32',
  osType: 'Windows_NT',
  freeMemory: 1244311552,
  totalMemory: 8251834368,
  EOL: '\r\n'
}
*/