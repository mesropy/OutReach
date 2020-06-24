import React from "react";

class CaseReport extends React.Component {
    render() {
        const {confirmed, recovered, active, status, 
               isCaseReport=false, isSafetyInfo=false, isPoll=false} 
              = this.props;

        return (
            <div className="panelCard">
                <h4>COVID-19</h4>
                <p>{("Confirmed: ").concat(confirmed)}</p>
                <p>{("Recovered: ").concat(recovered)}</p>
                <p>{("Active: ").concat(active)}</p>
                <p>{("Status: ").concat(status)}</p>
            </div>
        );
    }
}

export default CaseReport;