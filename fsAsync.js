const {readFile, writeFile} = require('fs');
// must provide a callback
console.log('start')
readFile('./Content/First.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const first = result
    readFile('./Content/Second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const first = result
        writeFile(
        './Content/result-async.txt',
        'Here is the result: ' + (first), (err,result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log('Done with this task')
        })
    })
})
console.log('Starting the next task')