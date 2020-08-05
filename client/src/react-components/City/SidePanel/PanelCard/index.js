import React from "react";
import PollClass from '../../../Poll'

// a generic panel card component
class PanelCard extends React.Component {
    render() {
        const { title } = this.props;

        return (
            <div className="panel_card">
                <h4><PollClass/></h4>
            </div>
        );
    }

}

export default PanelCard;
