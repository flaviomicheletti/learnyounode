//
// http://www.devfuria.com.br/node.js/learnyounode-03-my-first-io/
//

var fs   = require('fs')
var file = process.argv[2]

var contents = fs.readFileSync(file)
//var lines    = contents.toString().split('\n').length - 1
var lines = fs.readFileSync(file, 'utf8').split('\n').length - 1
console.log(lines)