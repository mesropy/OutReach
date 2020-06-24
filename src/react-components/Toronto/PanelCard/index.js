import React from "react";

class PanelCard extends React.Component {
    render() {
        const {title, l1, l2, l3, l4, l5, l6} = this.props;

        return (
            <div className="panelCard">
                <h4>{title}</h4>
                <p>{l1}</p>
                <p>{l2}</p>
                <p>{l3}</p>
                <p>{l4}</p>
                <p>{l5}</p>
                <p>{l6}</p>
            </div>
        );
    }

}

export default PanelCard;