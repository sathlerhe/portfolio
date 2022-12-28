import { Col, Container as GridContainer, Row } from "react-grid-system";
import Logo from "../../Components/Logo";
import { links } from "../../utils/headerLinks";

import { Container, Menu, Flex } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <GridContainer>
        <Row>
          <Col>
            <Flex>
              <Logo />

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
