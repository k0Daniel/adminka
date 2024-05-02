// /games
const gamesRoute = require('express').Router();
const { addGameController, sendAllGames, deleteGames } = require('../controllers/games');
const { getAllGames } = require('../middlewares/games');

gamesRoute.get('/games', getAllGames, sendAllGames);

gamesRoute.delete('/games/:id', getAllGames, deleteGames);

gamesRoute.post('/games', getAllGames, addGameController);

module.exports = gamesRoute;
