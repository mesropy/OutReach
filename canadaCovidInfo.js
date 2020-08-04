'use strict';
const request = require('request')

const canadaCovidCasesInfo = (province) => {
	return new Promise((resolve, reject) => {
		request({
			url: "https://api.covid19tracker.ca/summary/split",
			json: true
		}, (error, response, body) => {
			if (error) {
				reject("Can't connect to server")
			} else if (response.statusCode !== 200) {
				reject("Issue with getting resource")
			} else {
				const provinces = body.data
                const filter = provinces.filter(x => x.province === province)

				if (filter.length !== 0) {
					resolve({
						name: filter[0].province,
						confirmed: filter[0].total_cases,
                        recovered: filter[0].total_recoveries,
                        active: filter[0].total_cases - filter[0].total_fatalities - filter[0].total_recoveries,
					})
				}
			}
		})
	})
}


module.exports = { canadaCovidCasesInfo }

