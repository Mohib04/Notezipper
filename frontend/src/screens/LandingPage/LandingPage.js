import React from "react";
import { Container, Card, Button } from "react-bootstrap";

const LandingPage = () => {
  return (
    <div className="main">
      <Container>
        <Card className="text-center">
          <Card.Header>Welcome To SRD Limited</Card.Header>
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text></Card.Text>
            <Button className="m-1" variant="primary">
              Login
            </Button>
            <Button variant="primary">Registration</Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default LandingPage;
