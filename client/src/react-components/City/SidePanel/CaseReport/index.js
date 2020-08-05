import React from "react";
// const info = require("../../../../actions/covidInfoApp");

class CaseReport extends React.Component {
    render() {
        // const { city } = this.props;
        // // (^ this is commented out to avoid warnings)
        // // here, we will get the case count and status from a database
        // // using the name of the city
        // let data;
        // switch(city) {
        //     case "TORONTO":
        //         data = info.covidInfoApp("CA", "ON");
        //         break;
        //     case "MONTRÉAL":
        //         data = info.covidInfoApp("CA", "QC");
        //         break;
        //     case "PARIS":
        //         data = info.covidInfoApp("FR");
        //         break;
        //     default:
        // }
        const confirmed="13,420";
        const recovered="11,098";
        const active="1,337";
        const date="today";

        return (
            <div className="panel_card">
                <h4>COVID-19</h4>
                <p>Confirmed <strong> { confirmed }</strong></p>
                <p>Recovered <strong>{ recovered}</strong></p>
                <p>Active <strong>{ active }</strong></p>
                <p>Last Updated <strong>{ date }</strong></p>
                {/* <h4>{data.name + " COVID-19"}</h4>
                <p>Confirmed <strong> { data.confirmed }</strong></p>
                <p>Recovered <strong>{ data.recovered }</strong></p>
                <p>Active <strong>{ data.active }</strong></p>
                <p>Last Updated <strong>{ data.date }</strong></p> */}
            </div>
        );
    }
}

export default CaseReport;
