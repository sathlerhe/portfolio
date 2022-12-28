import React from "react";
import { Col, Container as GridContainer, Row } from "react-grid-system";

import Button from "../../Components/Button";
import Card from "../../Components/Card";
import { Container, TextContainer, BtnGroup, Flex } from "./styles";

const Init: React.FC = () => {
  return (
    <Container>
      <GridContainer>
        <Row>
          <Col>
            <Flex>
              <TextContainer>
                <h2>Olá,</h2>
                <h2>Me chamo Henrique e sou</h2>
                <h3>Desenvolvedor FrontEnd</h3>
                <BtnGroup>
                  <Button
                    color="secondary"
                    href="/assets/Henrique_Sathler.pdf"
                    download
                  >
                    Download CV
                  </Button>
                  <Button
                    color="primary"
                    href="https://www.linkedin.com/in/henrique-sathler"
                    target="_blank"
                  >
                    LinkedIn
                  </Button>
                </BtnGroup>
              </TextContainer>

              <Card />
            </Flex>
          </Col>
        </Row>
      </GridContainer>
    </Container>
  );
};

export default Init;
