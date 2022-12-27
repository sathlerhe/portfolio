import React from "react";
import { Container as GridContainer, Col, Row } from "react-grid-system";

import { Container } from "./styles";

const Projects: React.FC = () => {
  return (
    <Container id="projects">
      <GridContainer>
        <Row>
          <Col>
            <h2>Projetos</h2>
          </Col>
        </Row>
      </GridContainer>
    </Container>
  );
};

export default Projects;
