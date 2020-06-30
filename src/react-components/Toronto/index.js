import React from "react";
import '../main_styles.css';
import './styles.css';

// import components 
import TopBar from "./TopBar";
import CaseReport from "./CaseReport";
import SafetyInfo from "./SafetyInfo";
import PanelCard from "./PanelCard";
import Queue from "./Queue"

class Toronto extends React.Component {
    render() {
        return (
            <div>
                <TopBar cityName="TORONTO"/>

                <div className="sidePanel">
                    <CaseReport
                        confirmed="13,420"
                        recovered="11,098"
                        active="1,337"
                        status="Yellow"
                    />

                    <SafetyInfo/>

                    <PanelCard
                        title="Poll Question"
                    />
                </div>

                <Queue/>
            </div>
        );
    }
}

export default Toronto;
