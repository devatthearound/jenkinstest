// make test api server with express
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('this is upgraded!'+ req.query.name));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

