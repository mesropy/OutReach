import React from "react";
import '../main_styles.css';

// import components
import TopBar from "./TopBar";
import SidePanel from "./SidePanel";
import Timeline from "./Timeline";

class Toronto extends React.Component {
    state = {
      city: "TORONTO"
    }

    render() {
        return (
            <div>
                <TopBar
                    city={ this.state.city }
                    userLoggedIn={this.props.userLoggedIn}
                    adminLoggedIn={this.props.adminLoggedIn}
                    />
                <SidePanel city={ this.state.city } />
                <Timeline city={ this.state.city } />
            </div>
        );
    }
}

export default Toronto;
