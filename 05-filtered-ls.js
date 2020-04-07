//
// http://www.devfuria.com.br/node.js/learnyounode-05-filtered-ls/
//
// Crie um programa que imprima uma lista de arquivos filtrados por suas extensões em um dado diretório.
//
// Você irá receber um nome de diretório como primeiro argumento para seu programa, por exemplo:
//
// node program.js 'caminho/para/diretorio/'

'use strict'

var fs = require('fs')
var path = require('path')

var folder = process.argv[2]
var ext = '.' + process.argv[3]

fs.readdir(folder, function(err, list) {
    if (err) return console.error(err)
    list.forEach(function(file) {
        if (path.extname(file) === ext) {
            console.log(file)
        }
    })
});