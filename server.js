const express = require('express');
var logger = require('morgan');
const thingyRoute = require('./routes/thingy.js');

const app = express();
const port = 3000;

// dev = :method :url :status :response-time ms - :res[content-length]

app.use(logger('dev'));
app.use('/thingy', thingyRoute);
app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));