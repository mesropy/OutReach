import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

/* Component for the Home page */
class Home extends React.Component {
  render() {
    return (
      <div >
        <>
          <Button variant="primary">Register</Button>
        </>
        <Link to={"./../Register"}>
        </Link> 
      </div>
    );
  }
}

export default Home;