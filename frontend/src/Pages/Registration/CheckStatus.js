import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import MainScreen from "../../Components/MainScreen";
import Loading from "../../Components/Loading";
import ErrorMessage from "../../Components/ErrorMessage";
import SuccessMessage from "../../Components/SuccessMessage";
import axios from "axios";

const CheckStatus = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [cetID, setCetID] = useState("");
  const [payment, setPayment] = useState(false);
  const [branch, setBranch] = useState("");
  const [alloted, setAlloted] = useState(false);
  const [percentile, setPercentile] = useState("");
  const [reg, setReg] = useState(false);
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    // console.log({
    //   fname,
    //   lname,
    //   cetID,
    // });
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      setLoading(true);

      const { data } = await axios.post(
        "/student/status",
        { fname, lname, cetID },
        config
      );

      console.log(data, payment);
      setPercentile(data.percentile);
      setBranch(data.branch);
      setPayment(data.paymentDone);
      setAlloted(data.alloted);

      if (!data.paymentDone) {
        setReg(true);
        setError("Please Complete the Payment");
        setTimeout(() => {
          setError(false);
        }, 3000);
      } else {
        setReg(true);
      }

      setTimeout(() => {
        setSuccess(false);
      }, 5000);
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
    <MainScreen title={" Allotment Status"}>
      <Container>
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {success && (
          <SuccessMessage variant="success">{success}</SuccessMessage>
        )}
        {loading && <Loading></Loading>}
        {reg ? (
          <table className="status">
            <thead>
              <tr>
                <th>CET Application ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Percentile</th>
                <th>Requested Branch</th>
                <th>Payment</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{cetID}</td>
                <td>{fname}</td>
                <td>{lname}</td>
                <td>{percentile}</td>
                <td>{branch}</td>
                <td>{payment ? "Done" : "Please Complete Payment"}</td>
                <td>
                  {alloted
                    ? "Congratulations Your Seat is Confirmed "
                    : "No Seat Alloted"}
                </td>
              </tr>
            </tbody>
          </table>
        ) : (
          <>
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
                <Form.Label>MHT-CET Application ID</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Application ID"
                  value={cetID}
                  onChange={(e) => setCetID(e.target.value)}
                />
              </Form.Group>

              <Button variant="dark" type="submit">
                Check Status
              </Button>
            </Form>
            <br />
            <Row>
              <Col>
                Not Registered ?{" "}
                <Link to="/register">Register Yourself first.</Link>
              </Col>
            </Row>
          </>
        )}
      </Container>
    </MainScreen>
  );
};

export default CheckStatus;
