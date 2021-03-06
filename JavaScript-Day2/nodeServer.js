const http = require('http');
const server = http.createServer((req, res) => {
  if (req.url === '/api/os-info') {
    res.setHeader('Content-Type', 'application/json');
    // DOS Check
    dosDetector.addUrl(req.url);
    //Return a response with OS-info, using the code implemented in part-a
    const osObj = osText();
    const osString = JSON.stringify(osObj);
    res.write(osString);
    return res.end();
  }
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`<h2>Simple node HTTP server demo</h2>
      <p>Exposes this endpoint <code>/api/os-info</code></p>
    `);
    return res.end();
  }
});
server.on('connection', (sock) => {
  // You can get the client-IP in here, using sock.remoteAddress)
});
server.listen(3000);
console.log('listening on 3000');

//Register for the "DosDetected" event and console.log the url and time info.
// Forsøg 1:
const DosDetectorClass = require('./dosDetector'); // Import the module
const dosDetector = new DosDetectorClass.DosDetecterObj(2000); // Call the constructor on the new object

dosDetector.on('DOS Detected', (arg) => { //Eventlistener with callback
    console.log('Possible DOS attack detected', arg);
});



function osText() {
    const os = require("os");
  
    var platform = os.platform();
    var osType = os.type();
    var freeMemory = os.freemem();
    var totalMemory = os.totalmem();
    var eol = { es: os.EOL };
  
    const obje = { platform, osType, freeMemory, totalMemory, eol };
  
    return obje;
  }