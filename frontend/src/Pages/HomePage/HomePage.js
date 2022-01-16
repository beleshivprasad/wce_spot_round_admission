import React from "react";
import "../Pages.css";
import { Container, Row } from "react-bootstrap";
import MainScreen from "../../Components/MainScreen";

const Homepage = () => {
  return (
    <MainScreen title={"Welcome the WCE Sangli Spot Round Admission Process"}>
      <Container>
        <Row></Row>
      </Container>
    </MainScreen>
  );
};

export default Homepage;
