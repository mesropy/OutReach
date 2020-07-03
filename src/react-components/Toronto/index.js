import React from "react";
import '../main_styles.css';

// import components
import TopBar from "./TopBar";
import SidePanel from "./SidePanel";
import Timeline from "./Timeline";

// TODO: rename this to City
class Toronto extends React.Component {
    render() {
      const { city } = this.props;

        return (
            <div>
                <TopBar
                    city={ city }
                    isLoggedIn={this.props.isLoggedIn}
                    isAdmin={this.props.isAdmin}
                    username={this.props.username}
                    handleLogout={this.props.handleLogout}
                    />
                <SidePanel city={ city } />
                <Timeline
                    city={ city }
                    isLoggedIn={this.props.isLoggedIn}
                    isAdmin={this.props.isAdmin}
                    username={this.props.username} />
            </div>
        );
    }
}

export default Toronto;
