const http = require('http')

http.createServer((req, res) => {
    console.log(req.url, req.headers.cookie)
    res.writeHead(200, { 'Set-Cookie': 'mycookie=test' })
    res.end('hello cookie')
})
    .listen(8030, () => {
        console.log('8030 listen')
    })