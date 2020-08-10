import React from "react";
import '../main_styles.css';

// import components
import TopBar from "./TopBar";
import SidePanel from "./SidePanel";
import Timeline from "./Timeline";

class City extends React.Component {
    render() {
      const { city } = this.props;

        return (
            <div>
                <TopBar
                    city={ city }
                    currentUser={this.props.currentUser}
                    handleLogout={this.props.handleLogout}
                    />
                <SidePanel city={ city } />
                <Timeline
                    city={ city }
                    currentUser={this.props.currentUser} />
            </div>
        );
    }
}

export default City;
