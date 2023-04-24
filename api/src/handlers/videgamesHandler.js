const {videogamesController} = require('../controllers/videogamesController');

const videogamesHandler = async (req, res) => {
    try {
        const respuesta = await videogamesController()
        return res.status(200).json(respuesta)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {videogamesHandler}