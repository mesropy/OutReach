import React from "react";

class CaseReport extends React.Component {
    render() {
        const {confirmed, recovered, active, status} = this.props;

        return (
            <div className="panelCard">
                <h4>COVID-19</h4>
                <p><strong>{("Confirmed: ").concat(confirmed)}</strong></p>
                <p><strong>{("Recovered: ").concat(recovered)}</strong></p>
                <p><strong>{("Active: ").concat(active)}</strong></p>
                <p><strong>{("Status: ").concat(status)}</strong></p>
            </div>
        );
    }
}

export default CaseReport;