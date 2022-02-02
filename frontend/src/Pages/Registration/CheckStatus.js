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
  const [data, setData] = useState(JSON.parse(localStorage.getItem("student")));
  const [reg, setReg] = useState(localStorage.getItem("show"));
  const history = useHistory();
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
        "/student/status",
        { fname, lname, cetID },
        config
      );
      localStorage.setItem("student", JSON.stringify(data));

      console.log(data, payment);
      setPercentile(data.percentile);
      setBranch(data.branch);
      setPayment(data.paymentDone);
      setAlloted(data.alloted);

      // setReg(true);
      localStorage.setItem("show", true);
      setReg(localStorage.getItem("show"));
      setTimeout(() => {
        localStorage.setItem("show", false);
        setReg(localStorage.getItem("show"));
      }, 1000 * 60 * 10);
      if (!data.paymentDone) {
        setError("Please Complete the Payment");
        setTimeout(() => {
          setError(false);
        }, 3000);
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
        {reg === "true" ? (
          <>
            <table className="status">
              <thead>
                <tr>
                  <th>CET Application ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Percentile</th>
                  <th>Requested Branch</th>
                  <th>Status</th>
                  <th>Payment</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{data.cetID}</td>
                  <td>{data.fname}</td>
                  <td>{data.lname}</td>
                  <td>{data.percentile}</td>
                  <td>{data.branch}</td>
                  <td>
                    {alloted
                      ? "Congratulations Your Seat is Confirmed "
                      : "No Seat Alloted"}
                  </td>
                  <td>
                    {payment ? (
                      "Done"
                    ) : (
                      <>
                        <Button
                          type="button"
                          onClick={(e) => {
                            history.push("/payment");
                          }}
                        >
                          Complete Payment
                        </Button>
                      </>
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
            <br />
            <hr />
            <br />
            <Button
              style={{ float: "right" }}
              type="button"
              onClick={(e) => {
                localStorage.setItem("show", false);
                setReg(localStorage.getItem("show"));
              }}
            >
              Back
            </Button>
          </>
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
