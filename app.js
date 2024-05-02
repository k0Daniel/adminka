const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const cors = require('./middlewares/cors');
const mainRoute = require('./routes/main');
const gamesRouter = require('./routes/games');

const PORT = 3000;
const app = express();

app.use(cors, bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')), mainRoute, gamesRouter);

app.listen(PORT, () => {
	console.log(`Приложение запущено тут: http://localhost:${PORT}`);
});
