//
// http://www.devfuria.com.br/node.js/learnyounode-03-my-first-io/
//
// Escreva um programa que usa uma única operação síncrona de sistema de arquivos para ler e 
// imprimir o número de novas linhas que ele contém no console, algo similar à executar 
// cat file | wc -l.
//
// Todo o caminho até o arquivo à ser lido será fornecido como primeiro argumento da linha de comando.

var fs   = require('fs')
var file = process.argv[2]

//var contents = fs.readFileSync(file)
//var lines    = contents.toString().split('\n').length - 1
var lines = fs.readFileSync(file, 'utf8').split('\n').length - 1
console.log(lines)