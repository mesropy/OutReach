import React from "react";
import { Link } from "react-router-dom";

import Header from "./../WorldMap/Header";
import AccountNav from "./../AccountNav";
import { Button } from "@material-ui/core";

import "./styles.css";

class Home extends React.Component {
  render(){
    return(
      <div>
        <img className="worldMap"
             src={require("./../WorldMap/MapSelection/static/world_map.svg")}
             alt="world map"/>
        <Header />
        <AccountNav currentUser={this.props.currentUser}
                    handleLogout={this.props.handleLogout}/>
        <div id="introMessage">
          The purpose of OutReach is to provide those who were
          afflicted by the COVID-19 pandemic an opportunity to share their
          experiences. We hope to create a friendly environment for users to
          express their anxieties and how their lives have changed due to the
          outbreak. We promote public health by serving as an emotional outlet,
          and we provide statistical data and public safety information regarding
          the virus.
        </div>
        <div className="buttonContainer">
          <Button component= { Link } to={"/WorldMap"}
                  className="startButton"
                  color="primary"
                  size="large"
                  variant="outlined">
                  Start
          </Button>
        </div>
      </div>
    );
  }
}

export default Home;
