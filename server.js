const express = require('express');
const thingyRoute = require('./routes/thingy.js');

const app = express();
const port = 3000;

app.use('/thingy', thingyRoute);
app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));