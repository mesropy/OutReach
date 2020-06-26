import React from "react";
import '../main_styles.css';
import './styles.css';
import PanelCard from "./PanelCard";
import CaseReport from "./CaseReport";
import SafetyInfo from "./SafetyInfo";
// import PostAdder from "./PostAdder";
import TopBar from "./TopBar";
import PostList from "./PostList"
import AccountNavigation from "./../Home/AccountNavigation"


class Toronto extends React.Component {
    state = {
        name: "user",
        content: "",
        list: [
            ["Amy", "I am graduating in a few months. Worried about job market under covid :("],
            ["Brian", "Remote work is great. I have more time doing fun things with my family!"],
            ["James", "yooooooooooooooooooooooooooooooo"],
            ["Katie", "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"]
        ]
    }

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

                <PostList posts={this.state.list}/>

                <AccountNavigation 
                    name={this.state.name}
                    content={this.state.content}
                    list={this.state.list}
                />
            </div>
        );
    }
}

export default Toronto;
