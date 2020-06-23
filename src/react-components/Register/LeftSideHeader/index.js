import React from "react";
import { Link } from "react-router-dom";
import logo from './static/logo.png'


class LeftSideHeader extends React.Component {

    render() {
        return(
            <div>
                <Link to={"/"}>
                    <button type="button">Back</button>
                </Link>
                <h1>OutReach</h1>
                <img alt="The logo for the web-app" src={logo}/>
                <br></br>
                <br></br>
                <h6>connecting through our stories during during COVID-19</h6>
            </div>
        )
    }

}

export default LeftSideHeader