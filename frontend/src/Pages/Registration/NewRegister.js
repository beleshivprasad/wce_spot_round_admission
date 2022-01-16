import React, { useState } from "react";
import "./NewRegister.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import MainScreen from "../../Components/MainScreen";
import ErrorMessage from "../../Components/ErrorMessage";
import SuccessMessage from "../../Components/SuccessMessage";
import Loading from "../../Components/Loading";

const NewRegister = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [caste, setCaste] = useState("");
  const [percentile, setPercentile] = useState("");
  const [cetID, setCetID] = useState("");
  const [dob, setDob] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

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
        "/student/registration",
        { fname, lname, email, phone, percentile, cetID, dob, caste, gender },
        config
      );
      setLoading(false);
      console.log(data);
    } catch (error) {}
  };

  return (
    <MainScreen title={"Register Student"}>
      <Container>
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {success && (
          <SuccessMessage variant="success">{success}</SuccessMessage>
        )}
        {loading && <Loading></Loading>}
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
              type="number"
              placeholder="Enter Phone Number"
              value={phone}
              maxLength={10}
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
          <br />
          <Form.Group>
            <Form.Label>Gender</Form.Label>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => {
                setGender(e.target.value);
              }}
            >
              <option>Select Grade</option>
              <option value="MALE">MALE</option>
              <option value="FEMALE">FEMALE</option>
            </Form.Select>
          </Form.Group>
          <br />
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>MHT-CET Percentile Score</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter _CET Percentile"
              value={percentile}
              onChange={(e) => setPercentile(e.target.value)}
            />
          </Form.Group>
          <br />
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>MHT-CET Application ID</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Application ID"
              value={cetID}
              onChange={(e) => setCetID(e.target.value)}
            />
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Label>Grade</Form.Label>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => {
                setCaste(e.target.value);
              }}
            >
              <option value="">Select Grade</option>
              <option value="OPEN">OPEN</option>
              <option value="SC">SC</option>
              <option value="ST">ST</option>
              <option value="VJ/DT">VJ/DT</option>
              <option value="NTB/NT1">NTB/NT1</option>
              <option value="NTC/NT2">NTC/NT2</option>
              <option value="NTD/NT3">NTD/NT3</option>
              <option value="OBC">OBC</option>
              <option value="SEBC">SEBC</option>
              <option value="ORPHAN">ORPHAN</option>
            </Form.Select>
          </Form.Group>
          <br />
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
    </MainScreen>
  );
};

export default NewRegister;
