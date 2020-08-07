import React from "react";
const info = require("../../../../actions/covidInfo");

class CaseReport extends React.Component {
    render() {
        const { city } = this.props;
        // // (^ this is commented out to avoid warnings)
        // // here, we will get the case count and status from a database
        // // using the name of the city
        // this.state = ({
        //     date: "",
        //     active: "",
        //     confirmed: "",
        //     name: ""
        // })

        let date = "2020-08-07";
        let active;
        let confirmed;
        let recovered;
        let name;

        let countryCode, provinceCode;
        switch(city) {
            case "TORONTO":
                countryCode = "CA";
                provinceCode = "ON";
                name = "Ontario COVID-19";
                confirmed = "41709";
                recovered = "36024";
                active = "2864";
                break;
            case "MONTRÉAL":
                countryCode = "CA";
                provinceCode = "QC";
                name = "Quebec COVID-19";
                confirmed = "60241";
                recovered = "50886";
                active = "3668";
                break;
            case "PARIS":
                countryCode = "FR";
                provinceCode = "";
                name = "France COVID-19";
                confirmed = "197921";
                recovered = "82836";
                active = "84761";
                break;
            default:
        }
        info.covidInfo(countryCode, provinceCode).then((result) => {
            // this.setState({
            //     date: result.date,
            //     active: result.active,
            //     confirmed: result.confirmed,
            //     name: result.name
            // })
            console.log(result);
            document.getElementById(city).innerText = result.name + " COVID-19";
            document.getElementById(city + "Confirmed").innerText = result.confirmed;
            document.getElementById(city + "Recovered").innerText = result.recovered;
            document.getElementById(city + "Active").innerText = result.active;
            document.getElementById(city + "date").innerText = result.date;
        }).catch((error) => {
            // console.log(error);
            // document.getElementById(city).innerText = this.state.name + " COVID-19";
            // document.getElementById(city + "Confirmed").innerText = this.state.confirmed;
            // document.getElementById(city + "Recovered").innerText = this.state.recovered;
            // document.getElementById(city + "Active").innerText = this.state.active;
            // document.getElementById(city + "date").innerText = this.state.date;
        })
        return (
            <div className="panel_card">
                <h4 id={city}>COVID-19</h4>
                <p>Confirmed <strong id={city + "Confirmed"}>{confirmed}</strong></p>
                <p>Recovered <strong id={city + "Recovered"}>{recovered}</strong></p>
                <p>Active <strong id={city + "Active"}>{active}</strong></p>
                <p>Last Updated <strong id={city + "date"}>{date}</strong></p>
            </div>
        );
    }
}

export default CaseReport;
