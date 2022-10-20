import React from "react";
import { Container, Row } from "react-bootstrap";

const MainComponent = ({ title, children }) => {
  return (
    <div>
      <Container>
        <Row>
          <div className="page">
            {title && (
              <>
                <h2 className="heading">{title}</h2>
                <hr />
              </>
            )}
            {children}
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default MainComponent;
