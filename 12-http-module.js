const http = require('http')

const server = http.createServer((req,res)=>{
    console.log(req)
    if(req.url == '/' ){
        res.end("welcome to the home of varuns first ever website")

    }
    if(req.url == '/about'){
        res.end('this is a short histroy of varuns web development:\nthere really is nothing heh\n<h1>the end</h1>')
    }
    res.end(`<h1>you\'re accessing forbidden area</h1><p><a href = '/'>go back home</a></p>`)



})

server.listen(5000)
