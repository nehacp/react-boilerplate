const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 2400;

app.use(express.static(path.resolve(__dirname, './../../public')));
app.use(bodyParser.json());

app.listen(port, () => console.log(`App listening at ${port}`));
