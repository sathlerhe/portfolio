import React from "react";

import { Container, TextContainer, Card } from "./styles";

const Init: React.FC = () => {
  return (
    <Container>
      <TextContainer>
        <h2>Olá,</h2>
        <h2>Me chamo Henrique e sou</h2>
        <h3>Desenvolvedor FrontEnd</h3>
      </TextContainer>
      <Card></Card>
    </Container>
  );
};

export default Init;
