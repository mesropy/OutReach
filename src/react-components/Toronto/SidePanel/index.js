import React from "react";

import "./styles.css";

import Safety from "./Safety";
import CaseReport from "./CaseReport";
import PanelCard from "./PanelCard";

class SidePanel extends React.Component {
  render(){
    return(
      <div>
          <Safety />
          <div className="sidePanel">
              <CaseReport
                  confirmed="13,420"
                  recovered="11,098"
                  active="1,337"
                  status="Yellow"
              />

              {/* using a generic panel card as a placer for the polls */}
              <PanelCard title="Poll Question" />
          </div>
      </div>
    );
  }
}

export default SidePanel;
