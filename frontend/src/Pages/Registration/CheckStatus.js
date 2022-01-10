import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const CheckStatus = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="home">
      <Container>
        <Row>
          <h2>Check Allotment Status</h2>
        </Row>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>First Name </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter First Name"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Last Name </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Last Name"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Button variant="dark" type="submit">
            Register
          </Button>
        </Form>
        <br />
        <Row>
          <Col>
            Not Registered  ?{" "}
            <Link to="/register">Register Yourself first.</Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CheckStatus;
