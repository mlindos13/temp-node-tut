const {readFileSync, writeFileSync} = require('fs');
console.log('start')
const first = readFileSync('./Content/First.txt','utf8')
const Second = readFileSync('./Content/Second.txt','utf8')

writeFileSync(
    './Content/result-sync.txt',
'Here is the result: ' + (first) + (Second), 
{flag: 'a'}
)

console.log('Done with this task')
console.log('Starting the next task')