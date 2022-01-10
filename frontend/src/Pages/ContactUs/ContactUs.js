import React from "react";
import { Card, Button, Container, Row, Col, Form } from "react-bootstrap";
import "../Pages.css";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="home">
      <Card>
        <Card.Header>Get in Touch</Card.Header>
        <Card.Body>
          <Container>
            <Row>
              <Col>
                <Card.Text>
                  <a href="mailto:studentsection@walchandsangli.ac.in">
                    <i class="fas fa-envelope"></i>
                  </a>
                  studentsection@walchandsangli.ac.in
                </Card.Text>
                <Card.Text>
                  <i class="fas fa-phone-volume"></i>Prof. K. V. Madhale
                  –9834145923, 9822319324
                </Card.Text>
                <Card.Text>
                  <i class="fas fa-phone-volume"></i>Prof. A. A. Powar -
                  7028877692
                </Card.Text>
                <Card.Text>
                  <a href="https://www.google.com/maps/place/Walchand+College+of+Engineering/@16.8458568,74.6003256,18z/data=!4m5!3m4!1s0x3bc1237f52c65db5:0xa3535676176ded0a!8m2!3d16.8457387!4d74.6014575">
                    <i class="fas fa-map-marker-alt"></i>
                  </a>
                  WCE Sangli
                </Card.Text>
              </Col>
              <Col>
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={2} />
                  </Form.Group>
                  <Form.Group>
                    <Button variant="dark" type="submit">
                      Submit
                    </Button>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ContactUs;
