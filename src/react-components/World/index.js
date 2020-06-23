import React from "react";
import '../main_styles.css';
import './styles.css';
import { Link } from "react-router-dom";
import logo from '../Toronto/static/logo.png';
import profilePicture from '../Toronto/static/profile_picture.png';
import torontoPicture from '../Toronto/static/yyz.jpg';

class World extends React.Component {
    render() {
        return (
            <div>
            {/* <meta charSet="utf-8" />
            <title>OutReach</title>
            <link rel="stylesheet" type="text/css" href="styles.css" /> */}

            <div className="login">
              <ul>
                {/* TODO: link to login & signup pages */}
                <Link to={""} className="leftLogin">login</Link>
                <Link to={"./../Register"} className="rightSignup">sign up</Link>
              </ul>
            </div>

            <div id="user">
              {/* TODO: link to user page */}
              <Link to={""} id="userBlock">
                <img className="icon" src={profilePicture} alt="user icon" />
                <p id="name">user</p>
              </Link>
            </div>

            <div className="header">
              <ul>
                <li><p id="NAME">OutReach</p></li>
                <li><img id="logo" src={logo} alt="The hand logo" /></li>
                <li><p id="slogan">connecting through stories through COVID-19</p></li>
              </ul>
            </div>

            <div className="rightArea">

              <div className="board">
                <p>(An intro messeage briefly describing purpose of webapp and welcome users)</p>
              </div>

              <div className="board">
                <p>&lt;= Select a city from the map</p>
              </div>

              <div className="cityCard">
                <div id="topCard">
                  <h3>TORONTO</h3>
                  <img id="cityPic" className src={torontoPicture} alt="picture of city" />
                </div>

              <div id="bottomCard">
                <h4>
                  <Link to={"./../Toronto"}>
                    ENTER =&gt;
                  </Link>
                </h4>
              </div>

              </div>
            </div>
          </div>
        );
    }
}

export default World;