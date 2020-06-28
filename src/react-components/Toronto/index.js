import React from "react";
import '../main_styles.css';
import './styles.css';
import TopBar from "./TopBar";
import AccountNavigation from "./../Home/AccountNavigation"
import CaseReport from "./CaseReport";
import SafetyInfo from "./SafetyInfo";
import PanelCard from "./PanelCard";
import Queue from "./Queue"

class Toronto extends React.Component {
    render() {
        return (
            <div>
                <TopBar cityName="TORONTO"/>

                <AccountNavigation/>

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
