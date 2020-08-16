import React from "react";

// import components
import TopBar from "./TopBar";
import SidePanel from "./SidePanel";
import Timeline from "./Timeline";

class City extends React.Component {
    render() {
      const { city, messages} = this.props;

        return (
            <div>
                <TopBar
                    city={ city }
                    currentUser={this.props.currentUser}
                    handleLogout={this.props.handleLogout}
                    />
                <SidePanel city={ city } />
                <Timeline
                    messages={messages}
                    city={ city }
                    currentUser={this.props.currentUser}
                    currentUserId={this.props.currentUserId}/>
            </div>
        );
    }
}

export default City;
