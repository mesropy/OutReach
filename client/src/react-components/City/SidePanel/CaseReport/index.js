import React from "react";
const info = require("../../../../actions/covidInfo");

class CaseReport extends React.Component {
    render() {
        const { city } = this.props;
        // here, we will get the case count and status from a database
        // using the name of the city
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
        }).catch();
        return (
            <div className="panel_card panel_card_pos1">
                <h4><span className="light_blue_highlight" id={city}>COVID-19</span></h4>
                <p>Confirmed <strong id={city + "Confirmed"}>Loading</strong></p>
                <p>Recovered <strong id={city + "Recovered"}>Loading</strong></p>
                <p>Active <strong id={city + "Active"}>Loading</strong></p>
                <p>Last Updated <strong id={city + "date"}>Loading</strong></p>
            </div>
        );
    }
}

export default CaseReport;
