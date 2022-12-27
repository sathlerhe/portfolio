import React from "react";

import {
  Container,
  Experiences,
  TextExp,
  Img,
  TextInformations,
  Divider,
  Experience,
} from "./styles";

const Card: React.FC = () => {
  const recentExp = [
    {
      src: "/assets/growth.jpg",
      name: "Growth",
      function: "Dev Jr",
      location: "Vila Velha - ES",
    },
    {
      src: "/assets/fbhunter.jpg",
      name: "Feedback Hunter",
      function: "Dev Jr",
      location: "Vitória - ES",
    },
  ];
  return (
    <Container>
      <Experiences>
        <Img src="/assets/pfp.webp" alt="foto minha" />
        <TextExp>
          <h6>Experiências Recentes</h6>
          {recentExp?.map((exp) => (
            <Experience>
              <Img src={exp?.src} alt={exp?.name} />
              <TextInformations>
                <h5>{exp?.name}</h5>
                <h5>{exp?.function}</h5>
                <p>{exp?.location}</p>
              </TextInformations>
            </Experience>
          ))}
        </TextExp>
      </Experiences>
      <Divider />
      <p>
        Tenho 18 anos, sou programador em Javascript utilizando React e Next.Js,
        com competência em HTML e CSS. Técnico em montagem e manutenção de
        computadores.
      </p>
    </Container>
  );
};

export default Card;
