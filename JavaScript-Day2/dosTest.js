const DosDetectorClass = require('./dosDetector'); // Import the module
const dosDetector = new DosDetectorClass.DosDetecterObj(2000); // Call the constructor on the new object

dosDetector.on('DOS Detected', (arg) => { //Eventlistener with callback
    console.log('Possible DOS attack detected', arg);
});

dosDetector.addUrl("url1");
dosDetector.addUrl("url2");
dosDetector.addUrl("url3");

// Simulate requests for same URL within short time period
setTimeout(() => {
    dosDetector.addUrl("url1");
    dosDetector.addUrl("url3");
}, 1000)
