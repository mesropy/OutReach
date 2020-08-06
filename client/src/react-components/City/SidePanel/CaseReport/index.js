import React from "react";
const info = require("../../../../actions/covidInfo");

class CaseReport extends React.Component {
    render() {
        const { city } = this.props;
        // // (^ this is commented out to avoid warnings)
        // // here, we will get the case count and status from a database
        // // using the name of the city
        let countryCode, provinceCode;
        switch(city) {
            case "TORONTO":
                countryCode = "CA";
                provinceCode = "ON";
                break;
            case "MONTRÉAL":
                countryCode = "CA";
                provinceCode = "QC";
                break;
            case "PARIS":
                countryCode = "FR";
                provinceCode = "";
                break;
            default:
        }
        info.covidInfo(countryCode, provinceCode).then((result) => {
            document.getElementById(city).innerText = result.name + " COVID-19";
            document.getElementById(city + "Confirmed").innerText = result.confirmed;
            document.getElementById(city + "Recovered").innerText = result.recovered;
            document.getElementById(city + "Active").innerText = result.active;
            document.getElementById(city + "date").innerText = result.date;
        }).catch((error) => {
            console.log(error);
        })
        return (
            <div className="panel_card">
                <h4 id={city}>COVID-19</h4>
                <p>Confirmed <strong id={city + "Confirmed"}></strong></p>
                <p>Recovered <strong id={city + "Recovered"}></strong></p>
                <p>Active <strong id={city + "Active"}></strong></p>
                <p>Last Updated <strong id={city + "date"}></strong></p>
            </div>
        );
    }
}

export default CaseReport;
