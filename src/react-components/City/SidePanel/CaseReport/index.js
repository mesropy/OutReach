import React from "react";

class CaseReport extends React.Component {
    render() {
        // const { city } = this.props;
        // (^ this is commented out to avoid warnings)
        // here, we will get the case count and status from a database
        // using the name of the city

        const confirmed="13,420";
        const recovered="11,098";
        const active="1,337";
        const status="Yellow";

        return (
            <div className="panel_card">
                <h4>COVID-19</h4>
                <p>Confirmed <strong> { confirmed }</strong></p>
                <p>Recovered <strong>{ recovered}</strong></p>
                <p>Active <strong>{ active }</strong></p>
                <p>Status <strong>{ status }</strong></p>
            </div>
        );
    }
}

export default CaseReport;
