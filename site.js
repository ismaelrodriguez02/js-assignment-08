const fortunes = require('./fortunes.json')
const getFortunes = require('./module')

const myFortune = getFortunes(fortunes)

console.log(myFortune)

