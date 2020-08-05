import React from "react";
// const info = require("../../../../actions/covidInfo");

class CaseReport extends React.Component {
    render() {
        const { city } = this.props;
        // // (^ this is commented out to avoid warnings)
        // // here, we will get the case count and status from a database
        // // using the name of the city
        let confirmed="13,420";
        let recovered="11,098";
        let active="1,337";
        let date="Today";
        switch(city) {
            case "TORONTO":
                // info.covidInfo("CA", "ON").then((result) => {
                //     console.log(result);
                // }).catch((error) => {
                //     console.log(error);
                // })
                break;
            case "MONTRÉAL":
                break;
            case "PARIS":
                break;
            default:
        }
        return (
            <div className="panel_card">
                <h4>COVID-19</h4>
                <p>Confirmed <strong> { confirmed }</strong></p>
                <p>Recovered <strong>{ recovered}</strong></p>
                <p>Active <strong>{ active }</strong></p>
                <p>Last Updated <strong>{ date }</strong></p>
            </div>
        );
    }
}

export default CaseReport;
