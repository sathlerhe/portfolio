import React from "react";

import { Container, SkillsContainer, SkillBox } from "./styles";

const Skills: React.FC = () => {
  interface ISkillsObj {
    name: string;
    src: string;
    id: string;
  }

  const skills: Array<ISkillsObj> = [
    {
      name: "React",
      src: "/assets/react.png",
      id: "01",
    },
    {
      name: "JavaScript",
      src: "/assets/js.png",
      id: "02",
    },
    {
      name: "Next.js",
      src: "/assets/next.png",
      id: "03",
    },
    {
      name: "TypeScript",
      src: "/assets/ts.png",
      id: "04",
    },
    {
      name: "HTML",
      src: "/assets/html.png",
      id: "05",
    },
    {
      name: "CSS",
      src: "/assets/css.png",
      id: "06",
    },
    {
      name: "Vite",
      src: "/assets/vite.png",
      id: "07",
    },  
  ];

  interface IHandleToggleSkillName {
    id: string;
  }
  const handleToggleSkillName = (id: IHandleToggleSkillName) => {
    const skillName = document.querySelector(`#skillId${id}`);
    skillName?.classList.toggle("hidden");
  };

  return (
    <Container id="skills">
      <h2>Habilidades</h2>
      <SkillsContainer>
        {skills?.map((skill) => (
          <SkillBox
            key={skill?.id}
            onMouseEnter={() => handleToggleSkillName(skill?.id)}
            onMouseLeave={() => handleToggleSkillName(skill?.id)}
          >
            <img src={skill?.src} alt={skill?.name} />
            <p id={`skillId${skill?.id}`} className="hidden">
              {skill?.name}
            </p>
          </SkillBox>
        ))}
      </SkillsContainer>
    </Container>
  );
};

export default Skills;
