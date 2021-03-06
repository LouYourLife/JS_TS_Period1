//const fetch = require("node-fetch");
import fetch from "node-fetch";

function messageDelay(msg,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const upperCased = msg.toUpperCase();
            resolve(upperCased);
        },delay)
    })
}

const promises = [
    messageDelay("Hi",1000),
    messageDelay("Hi Class", 2000),
    messageDelay("Fuck", 1200),
    messageDelay("Shit", 2400),
]

/* messageDelay("Hi Class",1000)
.then(uMsg => console.log(uMsg)) */

Promise.any(promises).then((upperCased) => console.log(upperCased));
