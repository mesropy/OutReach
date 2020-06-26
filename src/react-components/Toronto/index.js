import React from "react";
import '../main_styles.css';
import './styles.css';
// import { Link } from "react-router-dom";
// import profilePicture from './static/profile_picture.png';
import PanelCard from "./PanelCard";
import CaseReport from "./CaseReport";
import SafetyInfo from "./SafetyInfo";
import PopupButton from "./PostAdder";
import Post from "./Post";
import TopBar from "./TopBar";

class Toronto extends React.Component {

    state = {
        username: ""
        // date: new Date(),
        // messages: [
        //   { name: "James", content: "What a beautiful day!" },
        //   { name: "Kate", content: "Kinda worried about " }
        // ]
    }

    render() {

        return (
            <div>
                <TopBar />

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

                <Post
                    username="Amy"
                    content="I am graduating in a few months. Worried about job market under covid :("
                />

                <Post
                    username="Brian"
                    content="Remote work is great. I have more time doing fun things with my family! 
                    Remote work is great. I have more time doing fun things with my family! 
                    Remote work is great. I have more time doing fun things with my family!
                    Remote work is great. I have more time doing fun things with my family!"
                />

                {/* button for adding a new message */}
                <PopupButton/>
            </div>
        );
    }
}

export default Toronto;


