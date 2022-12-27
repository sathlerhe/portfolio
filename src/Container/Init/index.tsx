import React from "react";
import Button from "../../Components/Button";
import Card from "../../Components/Card";

import { Container, TextContainer, BtnGroup } from "./styles";

const Init: React.FC = () => {
  return (
    <Container>
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
          >
            LinkedIn
          </Button>
        </BtnGroup>
      </TextContainer>

      <Card />
    </Container>
  );
};

export default Init;
