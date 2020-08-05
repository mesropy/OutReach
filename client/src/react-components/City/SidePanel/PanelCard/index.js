import React from "react";
import PollClass from '../../../Poll'

// a generic panel card component
class PanelCard extends React.Component {
    render() {
        const { title } = this.props;

        return (
            <div className="panel_card">
                <PollClass/>
            </div>
        );
    }

}

export default PanelCard;
