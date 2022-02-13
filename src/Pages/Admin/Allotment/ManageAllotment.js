import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Loading from "../../../Components/Loading";
import axios from "axios";
import MainScreen from "../../../Components/MainScreen";
import ErrorMessage from "../../../Components/ErrorMessage";
import SuccessMessage from "../../../Components/SuccessMessage";
import { useHistory } from "react-router-dom";
const ManageAllotment = () => {
  const [admin, setAdmin] = useState(JSON.parse(localStorage.getItem("admin")));
  const history = useHistory();
  !admin ? history.push("/admin") : history.push("/allotment");
  const [studentData, setStudentData] = useState([]);
  const [branch, setBranch] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const allotSeat = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${admin.accessToken}`,
        },
      };
      console.log(config);
      setLoading(true);
      const { data } = await axios.post("/admin/allot", {}, config);

      if (data) {
        setSuccess("Allotment Procedure Completed");
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

  const getMerit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      setLoading(true);
      const { data } = await axios.post(
        "/student/getmerit",
        { branch },
        config
      );
      setStudentData(data);
      if (data) {
        setSuccess("Fetched Data Succesfully");
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
  const renderStudent = (item, index) => {
    return (
      <tr key={index}>
        <td>{item.cetID}</td>
        <td>{item.fname.toUpperCase()}</td>
        <td>{item.lname.toUpperCase()}</td>
        <td>{item.percentile}</td>
        <td>{item.quota.toUpperCase()}</td>
        <td>{item.caste.toUpperCase()}</td>
        <td>{item.branch.toUpperCase()}</td>
        <td>
          {item.alloted
            ? "Congratulations Your Seat is Confirmed "
            : "No Seat Alloted"}
        </td>
      </tr>
    );
  };

  return (
    <MainScreen title={"Manage Allotment of Student"}>
      <Container className="center">
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {success && (
          <SuccessMessage variant="success">{success}</SuccessMessage>
        )}
        {loading && <Loading></Loading>}
        <h3>Seat Allocation</h3>
        <br />
        <Row>
          <Col>
            <Button
              type="button"
              onClick={(e) => {
                allotSeat(e);
              }}
            >
              Start Allocation
            </Button>
          </Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
        </Row>
        <br />
        <hr />
        <br />
        <h3>View Merit List</h3>
        <br />
        <Form onSubmit={getMerit}>
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
          <Row>
            {" "}
            <Button variant="dark" type="submit">
              Get Merit List
            </Button>
          </Row>
        </Form>
        <br></br>
        <hr />
        <table className="status">
          <thead>
            <tr>
              <th>CET Application ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Percentile</th>
              <th>Quota</th>
              <th>Category</th>
              <th>Requestd Branch</th>
              <th>Allotment Status</th>
            </tr>
          </thead>
          <tbody>{studentData?.map(renderStudent)}</tbody>
        </table>
      </Container>
    </MainScreen>
  );
};

export default ManageAllotment;
