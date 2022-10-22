const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json('Hello World!');
    });


app.listen(3000, () => {
    console.log('Listening on port 3000 https://localhost:3000');
    });