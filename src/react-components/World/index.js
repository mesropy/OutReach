import React from "react";
import '../main_styles.css'
import './styles.css';

class World extends React.Component {
    render() {
        return (
            <div>
            <meta charSet="utf-8" />
            <title>OutReach</title>
            <link rel="stylesheet" type="text/css" href="styles.css" />

            <div className="login">
              <ul>
                {/* TODO: link to login & signup pages */}
                <a href className="leftLogin">login</a>
                <a href className="rightSignup">sign up</a>
              </ul>
            </div>

            <div id="user">
              {/* TODO: link to user page */}
              <a href id="userBlock">
                {/* TODO: add user icon */}
                <img className="icon" src="dog.jpg" alt="user icon" />
                <p id="name">user</p>
              </a>
            </div>

            <div className="header">
              <ul>
                <li><p id="NAME">OutReach</p></li>
                {/* TODO: add hand logo */}
                <li><img id="logo" src="dog.jpg" alt="The hand logo" /></li>
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
                  {/* TODO: add Toronto pic */}
                  <img id="cityPic" className src="dog.jpg" alt="picture of city" />
                </div>

                <div id="bottomCard">
                  {/* TODO: link to city page */}
                  <h4><a href="../Toronto/toronto.html">ENTER =&gt;</a></h4>
                </div>

              </div>
            </div>
          </div>
        );
    }
}

export default World;