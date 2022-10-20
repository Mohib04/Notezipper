import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Footer() {
  return (
    <Container>
      <Row>
        <Col className="justify-content-center text-center">
          Copyright All reserved ANH Enterprise Limited
        </Col>
      </Row>
    </Container>
  );
}
