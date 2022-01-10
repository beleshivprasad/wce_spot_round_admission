import React, { useState } from "react";
import "./NewRegister.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const NewRegister = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [percentile, setPercentile] = useState("");
  const [cetID, setCetID] = useState("");
  const [dob, setDob] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="register">
      <Container>
        <Row>
          <h2>Register Student</h2>
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

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control
              type="date"
              placeholder="Enter Date of Birth "
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>MHT-CET Percentile Score</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter _CET Percentile"
              value={percentile}
              onChange={(e) => setPercentile(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>MHT-CET Application ID</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Application ID"
              value={cetID}
              onChange={(e) => setCetID(e.target.value)}
            />
          </Form.Group>

          <Button variant="dark" type="submit">
            Register
          </Button>
        </Form>
        <br />
        <Row>
          <Col>
            Allready Registered ?{" "}
            <Link to="/status">Check Allotment Status Here</Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NewRegister;
