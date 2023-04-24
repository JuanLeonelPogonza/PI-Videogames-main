const {Router} = require('express');
const routerGames = Router();
const { videogamesHandler } = require('../handlers/videgamesHandler');

routerGames.get('/', videogamesHandler)

module.exports = routerGames