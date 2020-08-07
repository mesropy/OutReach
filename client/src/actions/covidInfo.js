const request = require('request');

// countryCode is a string with 2 capital letters. e.g. "CA" for Canada, "FR" for France
// For CA, province is one of ON, QC, NS, NB, MB, BC, PE, SK, AB, NL, NT, YT, NU
const covidInfo = (countryCode, province) => {
    if (countryCode === "CA") {
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
                    try {
                        const provinces = body.data
                        const filter = provinces.filter(x => x.province === province)

                        if (filter.length !== 0) {
                            resolve({
                                name: provinceCodeToName(filter[0].province),
                                confirmed: filter[0].total_cases,
                                recovered: filter[0].total_recoveries,
                                active: filter[0].total_cases - filter[0].total_fatalities - filter[0].total_recoveries,
                                date: filter[0].date
                            })
                        }
                    } catch (error) {
                        console.log(error);
                    }
                }
            })
        })
    } else {
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
                    try {
                        const data = body.countrydata[0];
                        resolve({
                            name: data.info.title,
                            confirmed: data.total_cases,
                            recovered: data.total_recovered,
                            active: data.total_cases - data.total_deaths - data.total_recovered,
                            date: "2020-08-07"
                        })
                    } catch (error) {
                        console.log(error);
                    }
                }
            })
        })
    }
}

const provinceCodeToName = (provinceCode) => {
    let provinceName;
    switch (provinceCode) {
        case "ON":
            provinceName = "Ontario";
            break;
        case "QC":
            provinceName = "Quebec";
            break;
        case "NS":
            provinceName = "New Brunswick";
            break;
        case "MB":
            provinceName = "Manitoba";
            break;
        case "BC":
            provinceName = "British Columbia";
            break;
        case "PE":
            provinceName = "Prince Edward Island";
            break;
        case "SK":
            provinceName = "Saskatchewan";
            break;
        case "AB":
            provinceName = "Alberta";
            break;
        case "NL":
            provinceName = "Newfoundland and Labrador";
            break;
        case "NT":
            provinceName = "Northwest Territories";
            break;
        case "YT":
            provinceName = "Yukon";
            break;
        case "NU":
            provinceName = "Nunavut";
            break;
        default:
            break;
    }
    return provinceName;
}

// // Sample Usage
// covidInfo("CA", "QC").then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// })

// covidInfo("FR").then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// })

module.exports = { covidInfo }