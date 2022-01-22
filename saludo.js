const params = require('yargs-parser')(process.argv.slice(2))
const colors = require('colors')

console.log('parametros:', params)

const nombres = [
    'carlos',
    'sara',
    'Erik',
    'Ivonne',
    'Alberto',
    'Leo',
    'Alex',
    'Airy',
    'freddy',
    'Jose'
  ]

const koderName = params.name
const exists = nombres.includes(koderName)

if (exists) {
    console.log('El nombre existe'.rainbow)
}else {
    console.log('EL nombre no se encuentra en la lista')
}