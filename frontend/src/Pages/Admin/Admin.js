import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import MainScreen from "../../Components/MainScreen";
import Loading from "../../Components/Loading";
import ErrorMessage from "../../Components/ErrorMessage";
import axios from "axios";

const Admin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const history = useHistory();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      setLoading(true);

      const { data } = await axios.post(
        "/admin/login",
        { username, password },
        config
      );
      setLoading(false);
      localStorage.setItem("isAdmin", data.isAdmin);
      console.log(data);
      history.push("/");
      window.location.reload(true);
    } catch (error) {
      setError(error.response.data.message);
      setLoading(false);
    }
  };
  return (
    <MainScreen title={"Admin Login"}>
      <Container>
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {loading && <Loading></Loading>}
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
          <Form.Group className="mb-3" controlId="">
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
