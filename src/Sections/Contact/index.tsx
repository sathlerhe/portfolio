import React from "react";
import { Container as GridContainer, Col, Row } from "react-grid-system";

import { Container, SMContainer, SMBox, Img } from "./styles";

const Contact: React.FC = () => {
  interface ISocialMedia {
    name: string;
    link: string;
    icon: string;
  }
  const socialMedias: Array<ISocialMedia> = [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/henrique-sathler/",
      icon: "/assets/linkedin.png",
    },
    {
      name: "Github",
      link: "https://github.com/sathlerhe",
      icon: "/assets/github.png",
    },
    {
      name: "Whatsapp",
      link: "https://api.whatsapp.com/send/?phone=5527997742004",
      icon: "/assets/whatsapp.png",
    },
    {
      name: "Email",
      link: "mailto:henriquesfs30@gmail.com",
      icon: "/assets/email.png",
    },
  ];
  return (
    <Container id="contact">
      <GridContainer>
        <Row>
          <Col>
            <h2>Contato</h2>

            <SMContainer>
              {socialMedias?.map((sm) => (
                <SMBox href={sm?.link} target="_blank" key={sm?.name}>
                  <Img src={sm?.icon} alt={sm?.name} />
                </SMBox>
              ))}
            </SMContainer>
          </Col>
        </Row>
      </GridContainer>
    </Container>
  );
};

export default Contact;
