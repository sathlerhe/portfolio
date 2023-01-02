import React from "react";
import { Container as GridContainer, Col, Row } from "react-grid-system";

import {
  Container,
  ProjectsContainer,
  ProjectBox,
  ImgBox,
  LinksBox,
  TextBox,
} from "./styles";

const Projects: React.FC = () => {
  interface IProject {
    name: string;
    img?: string;
    description: string;
    gitLink: string;
    demoLink?: string;
  }
  const projects: Array<IProject> = [
    {
      name: "ToDo",
      img: "/assets/todo_img.png",
      description: "I've made a todo with a note pad",
      gitLink: "https://github.com/sathlerhe/todo",
      demoLink: undefined,
    },
    {
      name: "LandingPage",
      img: "/assets/lp_img.png",
      description: "Landing page coded using a figma design as base",
      gitLink: "https://github.com/sathlerhe/landingpage",
      demoLink: undefined,
    },
    {
      name: "Cat Generator",
      img: "/assets/cg_img.png",
      description: "A cat image generator to make you happy",
      gitLink: "https://github.com/sathlerhe/cat-generator",
      demoLink: "https://cat-generator-seven.vercel.app",
    },
  ];

  return (
    <Container id="projects">
      <GridContainer>
        <Row>
          <Col>
            <h2>Projetos</h2>

            <ProjectsContainer>
              {projects?.map((project) => (
                <ProjectBox key={project?.name}>
                  <TextBox>
                    <ImgBox
                      style={{ backgroundImage: `url(${project?.img})` }}
                    />
                    <h4>{project?.name}</h4>
                    <p>{project?.description}</p>
                  </TextBox>
                  <LinksBox>
                    <a href={project?.gitLink} target="_blank">
                      Source Code
                    </a>
                    {project?.demoLink && (
                      <a href={project?.demoLink} target="_blank">
                        Demo
                      </a>
                    )}
                  </LinksBox>
                </ProjectBox>
              ))}
            </ProjectsContainer>
          </Col>
        </Row>
      </GridContainer>
    </Container>
  );
};

export default Projects;
