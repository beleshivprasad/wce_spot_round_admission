import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import Loading from "../../Components/Loading";
import axios from "axios";
import MainScreen from "../../Components/MainScreen";
import ErrorMessage from "../../Components/ErrorMessage";
import SuccessMessage from "../../Components/SuccessMessage";
const MeritList = () => {
  const [showMerit, setShowMerit] = useState(localStorage.getItem("showMerit"));
  const [studentData, setStudentData] = useState([]);
  const [branch, setBranch] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

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
      </tr>
    );
  };

  return (
    <MainScreen title={"Merit List"}>
      <Container className="center">
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {success && (
          <SuccessMessage variant="success">{success}</SuccessMessage>
        )}
        {loading && <Loading></Loading>}

        <br />
        <br />
        {showMerit !== "true" ? (
          <h1>Merit List Yet to be Declared by College Authorites</h1>
        ) : (
          <>
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
              <Button
                variant="dark"
                type="submit"
                onClick={() => {
                  setShowMerit(localStorage.getItem("showMerit"));
                }}
              >
                Get Merit List
              </Button>
            </Form>
            <br></br>
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
                </tr>
              </thead>
              <tbody>{studentData?.map(renderStudent)}</tbody>
            </table>
          </>
        )}
      </Container>
    </MainScreen>
  );
};

export default MeritList;
