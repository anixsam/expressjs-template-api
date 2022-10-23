const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const app = express();

app.use('/api/sensor', require('./routes/sensorRoute'));
app.use('/api/cam', require('./routes/camRoute'));

app.get('/', (req, res) => {
    res.end(
        `<h1>Sensor API Running</h1>`
    )
});

app.listen(port, () => {
    console.log(`Listening on port ${port} https://localhost:${port}`);
    });