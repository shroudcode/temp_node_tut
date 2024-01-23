const {readFile, writeFile} = require('fs')

readFile('./content/first.txt','utf-8',(err,result) =>{
    if(err){
        console.log(err)
        return
    }
    const first = result
    console.log(first)
    readFile('./content/second.txt','utf-8',(error,result2)=>{
        if(error){
            console.log(error)
            return;
        }
        const second = result2
        console.log(second)
        writeFile('./content/result-async.txt',`here is the result : ${first},${second}`,(err,result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log(`yes i have written into new file, please go and check it`)
            return;
        })
        return;
    })


})


//readFile('source', 'encoding', function?)