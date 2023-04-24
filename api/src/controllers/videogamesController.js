const {API_KEY} = process.env
const axios = require('axios')
const apiKey = require('../key')

const videogamesController = async () => {

    const allData = (await axios.get(`https://api.rawg.io/api/games?key=${apiKey}`)).data
    const allVideoGames = allData.results
    console.log(allVideoGames, "holaaa");
    return allVideoGames;
}
module.exports = { videogamesController }