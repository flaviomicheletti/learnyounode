//
// http://www.devfuria.com.br/node.js/learnyounode-02-baby-steps/
//
// Escreva um programa que aceita um ou mais números como argumentos de linha de comando e
//  imprime a soma desses números no console.

'use strict'
    
let result = 0

for (let i = 2; i < process.argv.length; i++) {
  result += Number(process.argv[i])
}

console.log(result)

