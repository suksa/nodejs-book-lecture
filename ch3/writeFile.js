const fs = require('fs').promises

fs.writeFile('./writeme.txt', '파일만들기~').then(() => {
    return fs.readFile('./writeme.txt')
}).then(data => {
    console.log(data.toString())
}).catch(e => {
    console.error(e)
})