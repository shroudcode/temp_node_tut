    writeFile('./content/result-async.txt',`here is the result : ${first},${second}`,(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        console.log(`yes i have written into new file, please go and check it`)
        return;
    })
    return;