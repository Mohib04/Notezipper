import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="main">
      <Container>
        <Card className="text-center">
          <Card.Header>Welcome To SRD Limited</Card.Header>
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text></Card.Text>
            <Link to="/login">
              <Button className="m-1" variant="primary">
                Login
              </Button>
            </Link>
            <Link to="/registration">
              <Button variant="primary">Registration</Button>
            </Link>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default LandingPage;
