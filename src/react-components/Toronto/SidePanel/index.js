import React from "react";

import "./styles.css";

import CaseReport from "./CaseReport";
import SafetyInfo from "./SafetyInfo";
import PanelCard from "./PanelCard";

class SidePanel extends React.Component {
  render(){
    return(
      <div className="sidePanel">
          <CaseReport
              confirmed="13,420"
              recovered="11,098"
              active="1,337"
              status="Yellow"
          />

          <SafetyInfo />

          {/* using a generic panel card as a placer for the polls */}
          <PanelCard title="Poll Question" />
      </div>
    );
  }
}

export default SidePanel;
