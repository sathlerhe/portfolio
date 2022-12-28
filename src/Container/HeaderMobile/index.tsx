import React, { useState } from "react";
import { Col, Container as GridContainer, Row } from "react-grid-system";

import { Container, Flex } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import MenuDrawer from "./MenuDrawer";
import Logo from "../../Components/Logo";

const HeaderMobile: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container>
      <GridContainer>
        <Row id="header__row">
          <Col>
            <Flex>
              {" "}
              <Logo />
              <FontAwesomeIcon
                onClick={() => setIsOpen(true)}
                icon={faBars}
                className="bars__header"
              />
            </Flex>
          </Col>
        </Row>
      </GridContainer>
      <MenuDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
    </Container>
  );
};

export default HeaderMobile;
