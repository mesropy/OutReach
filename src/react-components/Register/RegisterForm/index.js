import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Form, Button, Container } from "react-bootstrap";

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        const year = (new Date()).getFullYear() - 10
        this.years = Array.from(new Array(100), (val, index) => year - index)
    }

    render() {
        return (
            <Container>
            <Form controlid="form" >
                <Form.Group as={Row} controlid="formUsername" className="justify-content-md-center">
                    <Form.Label column sm={1} className="text-center">
                        Username: 
                    </Form.Label>
                    <Col sm={3}>
                        <Form.Control type="text" required/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlid="formPassword" className="justify-content-md-center">
                    <Form.Label column sm={1}>
                        Password: 
                    </Form.Label>
                    <Col sm={3}>
                        <Form.Control type="password" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlid="formConfirmPassword" className="justify-content-md-center">
                    <Form.Label column sm={1}>
                        Confirm Password: 
                    </Form.Label>
                    <Col sm={3}>
                        <Form.Control type="text" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlid="formPhoneNumber" className="justify-content-md-center">
                    <Form.Label column sm={1}>
                        Phone Number: 
                    </Form.Label>
                    <Col sm={3}>
                        <Form.Control type="number" pattern="^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$"/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlid="formLocation" className="justify-content-md-center">
                    <Form.Label column sm={1}>
                       Location: 
                    </Form.Label>
                    <Col sm={2}>
                        <Form.Control as="select" className="countries order-alpha presel-byip " id="countryId">
                            <option value="">Select Country</option>
                        </Form.Control>
                    </Col>
                    <Col sm={2}>
                        <Form.Control as="select" className="states order-alpha" id="stateId">
                            <option value="">Select State</option>
                        </Form.Control>
                    </Col>
                    <Col sm={2}>
                        <Form.Control as="select" className="cities order-alpha" id="cityId">
                            <option value="">Select City</option>
                        </Form.Control>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlid="formAge" className="justify-content-md-center">
                    <Form.Label column sm={1}>
                        Age (optional): 
                    </Form.Label>
                    <Col sm={3}>
                        <Form.Control as="select">
                        {this.years.map((year, index) => {
                            return <option key={`year${index}`} value={year}>{year}</option>
                        })}
                        </Form.Control>
                    </Col>
                </Form.Group>
                <Link to={"./../"}>
                    <div className="text-center">
                        <Button type="submit" value="Submit" variant="primary" className="">Submit</Button>
                    </div>
                </Link>
            </Form>
            </Container>
        )           
    }
}

export default RegisterForm