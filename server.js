'use strict';
const log = console.log

const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'src')));

const port = process.env.PORT || 5000
app.listen(port, () => {
	log(`Listening on port ${port}...`)
}) 