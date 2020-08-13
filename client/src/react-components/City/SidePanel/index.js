import React from "react";

import "./styles.css";

import Safety from "./Safety";
import CaseReport from "./CaseReport";
import PollClass from "./Poll";

class SidePanel extends React.Component {
  render(){
    const { city } = this.props;

    return(
      <div>
          <CaseReport city={ city }/>
          <Safety city={ city } />
          <PollClass title="Poll Question" />
      </div>
    );
  }
}

export default SidePanel;
