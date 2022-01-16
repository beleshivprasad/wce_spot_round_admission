import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainScreen from "../../Components/MainScreen";

const Admin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
  };
  return (
    <MainScreen title={"Admin Login"}>
      <Container>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Password </Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="dark" type="submit">
            Login
          </Button>
        </Form>
        <br />
        <Row>
          <Col>
            <Link to="/">Got to Home</Link>
          </Col>
        </Row>
      </Container>
    </MainScreen>
  );
};

export default Admin;
