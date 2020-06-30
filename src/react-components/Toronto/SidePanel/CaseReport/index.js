import React from "react";

class CaseReport extends React.Component {
    render() {
        const {confirmed, recovered, active, status} = this.props;

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
