import React from "react";
import logo from './static/logo.svg'
import handwave from "./static/handwave.svg"
import './styles.css'

class LeftSideHeader extends React.Component {

    render() {
        return(
            <div id="header_background">
                <button id="back" type="button">
                <a href="/">
                     &#10094; Back
                </a>
                </button>
                <div id="header_content" className="text-center">
                    <div id="header">
                        <h1>OutReach</h1>
                        <img alt="The logo for the web-app" src={logo}/>
                    </div>
                    <br></br>
                    <br></br>
                    <div id="tagline">
                        <h5>connecting through our stories <br/><span id="second_tagline"> during COVID-19 </span></h5>
                    </div>
                </div>
                <img id="handwave_background" alt="Adjacent reaching hands combined to form a wave at the bottom of the left side panel" src={handwave}/>
            </div>
        )
    }

}

export default LeftSideHeader