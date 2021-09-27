import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const NotFound = () => (
  <Container>

    <Row>
      <Col>
        <h1>404 Error: Page Not Found</h1>
      </Col>
    </Row>

    <Row>
      <Col>
        <p>
          The page you are looking for doesn't exist!{" "}
          <Link to="/">Go Back</Link>.
        </p>
      </Col>
    </Row>
  </Container>
);

export default NotFound;
