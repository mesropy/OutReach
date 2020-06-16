import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import './styles.css';


/* Component for the Home page */
class Home extends React.Component {
  render() {
    return (
      <div >
        <Link to={"./../Register"}>
          <Button variant="primary">Register</Button>
        </Link>
      </div>
    );
  }
}

export default Home;