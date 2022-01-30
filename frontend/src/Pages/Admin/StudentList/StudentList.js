import React, { useState } from "react";
import MainScreen from "../../../Components/MainScreen";
import Loading from "../../../Components/MainScreen";
import ErrorMessage from "../../../Components/MainScreen";
import axios from "axios";
import { Button, Form, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const StudentList = () => {
  const [admin, setAdmin] = useState(localStorage.getItem("isAdmin"));
  const history = useHistory();
  admin !== "true" ? history.push("/") : history.push("/studentlist");
  const [branch, setBranch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [studentData, setStudentData] = useState([]);

  async function getStudent(e) {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      setLoading(true);
      const { data } = await axios.post("/admin/fetch", { branch }, config);
      setStudentData(data);
      setLoading(false);
    } catch (error) {
      setError(error.response.data.message);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  }
  const renderStudent = (item, index) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{item.cetID}</td>
        <td>{item.fname}</td>
        <td>{item.lname}</td>
        <td>{item.percentile}</td>
        <td>{item.paymentDone ? "Done" : "Remaining"}</td>
        <td>{item.quota.toUpperCase()}</td>
        <td>{item.caste.toUpperCase()}</td>
        <td>{item.branch.toUpperCase()}</td>
        <td>{item.alloted ? "Alloted the Seat" : "Not Alloted"}</td>
      </tr>
    );
  };
  return (
    <MainScreen title={"Registered For Spot Round Admission"}>
      {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
      {loading && <Loading></Loading>}
      <Form
        onSubmit={(e) => {
          getStudent(e);
        }}
      >
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
            Get Students
          </Button>
        </Row>
      </Form>

      <br />
      <br />
      <table className="status">
        <thead>
          <tr>
            <th>Sr.No</th>
            <th>CET Application ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Percentile</th>
            <th>Payment</th>
            <th>Quota</th>
            <th>Category</th>
            <th>Requestd Branch</th>
            <th>Allotement Status</th>
          </tr>
        </thead>
        <tbody>{studentData?.map(renderStudent)}</tbody>
      </table>
    </MainScreen>
  );
};

export default StudentList;
