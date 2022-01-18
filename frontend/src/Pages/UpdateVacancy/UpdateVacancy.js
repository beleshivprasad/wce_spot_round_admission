import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import MainScreen from "../../Components/MainScreen";
import Loading from "../../Components/Loading";
import ErrorMessage from "../../Components/ErrorMessage";
import SuccessMessage from "../../Components/SuccessMessage";
import axios from "axios";

const UpdateVacancy = () => {
  const [branch, setBranch] = useState("");
  const [seat, setSeat] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [caste, setCaste] = useState("");
  const [quota, setQuota] = useState("");
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
        "/vacancy/update",
        { branch, quota, caste, seat },
        config
      );
      setLoading(false);
      console.log(data);
    } catch (error) {
      setError(error.response.data.message);
      setLoading(false);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };
  return (
    <MainScreen title={"Update the Vacancy"}>
      {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
      {success && <SuccessMessage variant="success">{success}</SuccessMessage>}
      {loading && <Loading></Loading>}
      <Form onSubmit={submitHandler}>
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
        <br></br>
        <Form.Group>
          <Form.Label>Choose Quota</Form.Label>
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
            <option value="orphan">ORPHAN</option>
          </Form.Select>
        </Form.Group>
        <br />
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Update Seat</Form.Label>
          <Form.Control
            type="number"
            placeholder="New Seat Count"
            value={seat}
            onChange={(e) => setSeat(e.target.value)}
          />
        </Form.Group>
        <br />
        <Button variant="dark" type="submit">
          Submit
        </Button>
      </Form>
    </MainScreen>
  );
};

export default UpdateVacancy;