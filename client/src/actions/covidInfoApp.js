'use strict';
const request = require('request');
const world = require('./worldCovidInfo');
const canada = require('./canadaCovidInfo');

const covidInfoApp = (countryCode, provinceCode) => {
	if (countryCode === "CA") {
		canada.canadaCovidInfo(provinceCode).then((result) => {
			console.log(result);
		}).catch((error) => {
			console.log(error)
		})
	} else {
		world.worldCovidInfo("FR").then((result) => {
			console.log(result);
		}).catch((error) => {
			console.log(error);
		})
	}
}


// covidInfoApp("CA", "AB");
// covidInfoApp("FR");
module.exports = { covidInfoApp }