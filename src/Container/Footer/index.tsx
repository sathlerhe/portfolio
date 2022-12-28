import { Col, Container as GridContainer, Row } from "react-grid-system";

import { Container, Flex } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <GridContainer>
        <Row>
          <Col>
            <Flex>
              <p>
                Copy Rights @ 2022 -{" "}
                <a href="https://www.linkedin.com/in/henrique-sathler/">
                  Henrique Sathler
                </a>
              </p>
            </Flex>
          </Col>
        </Row>
      </GridContainer>
    </Container>
  );
};

export default Header;
