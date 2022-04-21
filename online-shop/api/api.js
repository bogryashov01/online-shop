// Modules
const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./db');
const bcrypt = require('bcrypt');

app.use(cors());

app.use(express.json());

app.use('/static', express.static('static'));

app.listen(8000, () => {
  console.log('Example app listening on port 8000!');
});
