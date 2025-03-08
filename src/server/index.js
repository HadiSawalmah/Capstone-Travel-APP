const express = require('express');
const axios = require('axios');
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv').config();
const port = process.env.PORT||3000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../../dist')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../dist/index.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

module.exports = app;