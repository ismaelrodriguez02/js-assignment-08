const getFortunes = ((text) => {
    const RandomNumber = Math.floor(Math.random(0,9) * 10)
     return text[RandomNumber]
})

module.exports = getFortunes
