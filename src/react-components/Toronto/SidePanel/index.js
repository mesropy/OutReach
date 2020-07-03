import React from "react";

import "./styles.css";

import Safety from "./Safety";
import CaseReport from "./CaseReport";
import PanelCard from "./PanelCard";

class SidePanel extends React.Component {
  render(){
    const { city } = this.props;

    return(
      <div>
          <Safety city={ city } />
          <div className="sidePanel">
              <CaseReport
                  city={ city }
              />

              {/* using a generic panel card as a placer for the polls
                (this is an additional feature that we may later)*/}
              <PanelCard title="Poll Question" />
          </div>
      </div>
    );
  }
}

export default SidePanel;
