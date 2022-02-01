import React, { useState } from "react";
import MainScreen from "../../../Components/MainScreen";
import Loading from "../../../Components/Loading";
import ErrorMessage from "../../../Components/ErrorMessage";
import SuccessMessage from "../../../Components/SuccessMessage";
import axios from "axios";
import { Button, Container, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const AddAdmin = () => {
  const [admin, setAdmin] = useState(JSON.parse(localStorage.getItem("admin")));
  const history = useHistory();
  !admin ? history.push("/admin") : history.push("/admin/add");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cnfpassword, setCnfpassword] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${admin.accessToken}`,
        },
      };
      setLoading(true);
      const { data } = await axios.post(
        "/admin/add",
        { username, password, cnfpassword },
        config
      );

      if (data) {
        setSuccess("Admin Added");
        setTimeout(() => {
          setSuccess(false);
        }, 2000);
      }
      setLoading(false);
    } catch (error) {
      setError(error.response.data.message);
      setLoading(false);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };
  return (
    <MainScreen title={"Add Admin"}>
      {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
      {success && <SuccessMessage variant="success">{success}</SuccessMessage>}
      {loading && <Loading></Loading>}
      <Container>
        <Form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Username "
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Password </Form.Label>
            <Form.Control
              type="password"
              placeholder="Ente Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Confirm Password </Form.Label>
            <Form.Control
              type="password"
              placeholder="Ente ConfirmPassword"
              value={cnfpassword}
              onChange={(e) => setCnfpassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="dark" type="submit">
            Add Admin
          </Button>
        </Form>
      </Container>
    </MainScreen>
  );
};

export default AddAdmin;
