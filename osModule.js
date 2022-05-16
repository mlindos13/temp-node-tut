const os = require('os')

// user info
const user = os.userInfo()
console.log(user)

// systtem uptime
console.log('The System uptime is ' + (os.uptime()) + ' seconds')

const currentOS = {
name:os.type(),
release:os.release(),
totalMem:os.totalmem(),
freeMem:os.freemem()
}
console.log(currentOS)