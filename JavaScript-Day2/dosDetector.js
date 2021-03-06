console.log("### Simple DOS-detector (Denial Of Service) file ###");
const EventEmitter = require('events'); //Skal bruges??
//const emitter = new EventEmitter();

class DOS_Detector extends EventEmitter {
    constructor(timeValue){
      super();  //Figure out what it is you have to extend (use moshes video)
      this.urls = new Map();
      this.TIME_BETWEEN_CALLS = timeValue;
    }
    addUrl = (url) =>{
      const time = new Date().getTime();
      if(this.urls.has(url)){
        const deltaTime = time - this.urls.get(url) 
        if(deltaTime < this.TIME_BETWEEN_CALLS){
          // console.log("TODO: Fire the 'DosDetected' event")
          // Add this info to the event {url:url,timeBetweenCalls:deltaTime}
          // First string is what the eventListener is listening for - they have to match!
          this.emit('DOS Detected', {url : url, timeBetweenCalls : deltaTime});
        }
      }
      this.urls.set(url,time);
    }
 }
 // Export the class using nodes CommonJS module system (require/exports)
 module.exports.DosDetecterObj = DOS_Detector;
 //console.log(module);