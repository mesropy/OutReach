'use strict';
const request = require('request')

// countryCode is a string with 2 capital letters. e.g. "CA" for Canada, "FR" for France
const worldCovidInfo = (countryCode) => {
	return new Promise((resolve, reject) => {
		request({
			url: "https://api.thevirustracker.com/free-api?countryTotal=" + countryCode,
			json: true
		}, (error, response, body) => {
			if (error) {
				reject("Can't connect to server");
			} else if (response.statusCode !== 200) {
				reject("Issue with getting resource");
			} else {
				const data = body.countrydata[0];
				resolve({
					name: data.info.title,
					confirmed: data.total_cases,
                    recovered: data.total_recovered,
					active: data.total_cases - data.total_deaths - data.total_recovered,
				})
			}
		})
	})
}


module.exports = { worldCovidInfo }
