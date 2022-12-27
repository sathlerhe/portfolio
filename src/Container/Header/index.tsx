import { Col, Container as GridContainer, Row } from "react-grid-system";

import { Container, Title, Menu, Flex } from "./styles";

const Header: React.FC = () => {
  const links = [
    {
      text: "Início",
      link: "#",
    },
    {
      text: "Habilidades",
      link: "#skills",
    },
    {
      text: "Projetos",
      link: "#projects",
    },
    {
      text: "Contato",
      link: "#contact",
    },
  ];

  return (
    <Container>
      <GridContainer>
        <Row>
          <Col>
            <Flex>
              <Title>
                <i>{"<"}</i>
                HenriqueSathler
                <i>{"/>"}</i>
              </Title>

              <Menu>
                {links?.map((link) => (
                  <a key={link?.text} href={link?.link}>
                    {link?.text}
                  </a>
                ))}
              </Menu>
            </Flex>
          </Col>
        </Row>
      </GridContainer>
    </Container>
  );
};

export default Header;
