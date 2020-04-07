//
// http://www.devfuria.com.br/node.js/learnyounode-04-my-first-async-io/
//
// o mesmo que o anterior, só que assíncrono.

var fs   = require('fs')
var file = process.argv[2]

fs.readFile(file, 'utf8', function (err, contents) {
    if (err) {
        return console.log(err)
    }

    var lines = contents.split('\n').length - 1
    console.log(lines)
})