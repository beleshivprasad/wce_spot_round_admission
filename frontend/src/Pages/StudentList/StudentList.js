import React, { useState } from "react";
import MainScreen from "../../Components/MainScreen";
import Loading from "../../Components/Loading";
import ErrorMessage from "../../Components/ErrorMessage";
import axios from "axios";
import { Button } from "react-bootstrap";

const StudentList = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [studentData, setStudentData] = useState([]);
  const [admin, setAdmin] = useState(localStorage.getItem("isAdmin"));

  async function getStudent() {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      setLoading(true);
      const { data } = await axios.post("/admin/fetch", config);
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
        <td>{item.cetID}</td>
        <td>{item.fname}</td>
        <td>{item.lname}</td>
        <td>{item.percentile}</td>
        <td>{item.paymentDone ? "Done" : "Remaining"}</td>
        <td>{item.branch}</td>
        <td>{item.alloted ? "Alloted the Seat" : "Not Alloted"}</td>
      </tr>
    );
  };
  return (
    <MainScreen title={"Registered For Spot Round Admission"}>
      {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
      {loading && <Loading></Loading>}
      <Button
        type="button"
        onClick={() => {
          getStudent();
          console.log(studentData);
        }}
      >
        Refresh
      </Button>
      <br />
      <br />
      <table className="status">
        <thead>
          <tr>
            <th>CET Application ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Percentile</th>
            <th>Payment</th>
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
