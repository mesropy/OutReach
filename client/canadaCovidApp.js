'use strict';
const log = console.log
const request = require('request');
const covid = require('./canadaCovidInfo')


covid.canadaCovidCasesInfo("ON").then((result) => {
	log(result)
}).catch((error) => {
	log(error)
})