'use strict';
const log = console.log;
const request = require('request');
const covid = require('./worldCovidInfo');


covid.worldCovidCasesInfo("CA").then((result) => {
	log(result);
}).catch((error) => {
	log(error);
})