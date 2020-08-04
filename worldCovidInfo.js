'use strict';
const request = require('request')

// countryCode is a string with 2 capital letters. e.g. "CA" for "Canada"
const worldCovidCasesInfo = (countryCode) => {
	return new Promise((resolve, reject) => {
		request({
			url: "https://api.covid19api.com/summary",
			json: true
		}, (error, response, body) => {
			if (error) {
				reject("Can't connect to server");
			} else if (response.statusCode !== 200) {
				reject("Issue with getting resource");
			} else {
				const countries = body.Countries;
                const filter = countries.filter(x => x.CountryCode === countryCode);

				if (filter.length !== 0) {
					resolve({
						name: filter[0].Country,
						confirmed: filter[0].TotalConfirmed,
                        recovered: filter[0].TotalRecovered,
                        active: filter[0].TotalConfirmed - filter[0].TotalDeaths - filter[0].TotalRecovered,
					})
				}
			}
		})
	})
}


module.exports = { worldCovidCasesInfo }

