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
  const [quota, setQuota] = useState("");
  const [branch, setBranch] = useState("");
  const [caste, setCaste] = useState("");
  const [percentile, setPercentile] = useState("");
  const [cetID, setCetID] = useState("");
  const [dob, setDob] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    let obj = new Date(2018, 3, 2, 12, 23);
    console.log(obj.toLocaleDateString(),obj.toLocaleTimeString());
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      setLoading(true);

      const { data } = await axios.post(
        "/student/registration",
        {
          fname,
          lname,
          email,
          phone,
          dob,
          caste,
          quota,
          cetID,
          percentile,
          branch,
        },
        config
      );
      if (data) {
        console.log(data);
        setSuccess("Registered Successfully");
      }
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
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
    <MainScreen title={"Registration"}>
      <Container>
        <Row>
          <marquee>
            Registration Window is Open on August 25 from 8 a.m. to 12 p.m.
            Please Complete the registration within time
          </marquee>
        </Row>
      </Container>
      <br />
      <hr />
      <br />
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
              minLength={10}
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
          <hr />
          <br />
          <Form.Group>
            <Form.Label>Quota</Form.Label>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => {
                setQuota(e.target.value);
              }}
            >
              <option value="">Select Quota</option>
              <option value="g">General</option>
              <option value="l">Ladies</option>
              <option value="pw">PWD</option>
              <option value="def">Defence</option>
            </Form.Select>
          </Form.Group>
          <br />
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>MHT-CET Percentile Score</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter _CET Percentile"
              value={percentile}
              onChange={(e) => setPercentile(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>MHT-CET Application ID</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Application ID"
              value={cetID}
              onChange={(e) => setCetID(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Choose Branch</Form.Label>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => {
                setBranch(e.target.value);
              }}
            >
              <option value="">Select Branch</option>
              <option value="cse">Computer Science and Engineering</option>
              <option value="it">Information Technology</option>
              <option value="civil">Civil Engineering</option>
              <option value="electronics">Electronics Engineering</option>
              <option value="electrical">Electrical Engineering</option>
              <option value="mechanical">Mechanical Engieering</option>
            </Form.Select>
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Label>Category</Form.Label>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => {
                setCaste(e.target.value);
              }}
            >
              <option value="">Select Category</option>
              <option value="open">OPEN</option>
              <option value="sc">SC</option>
              <option value="st">ST</option>
              <option value="vjdt">VJ/DT</option>
              <option value="ntb">NTB/NT1</option>
              <option value="ntc">NTC/NT2</option>
              <option value="ntd">NTD/NT3</option>
              <option value="obc">OBC</option>
              <option value="sebc">SEBC</option>
              {quota === "g" ? <option value="ophan">ORPHAN</option> : <></>}
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
