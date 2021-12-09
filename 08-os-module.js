const os = require('os');

//info about current user

console.log(os.userInfo())


// method returns the system uptime in seconds

console.log(`System up time ${os.uptime() } seconds`);


const currentOS = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os. freemem()
}

console.log(currentOS);