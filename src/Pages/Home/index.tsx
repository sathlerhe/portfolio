import React from "react";

import Header from "../../Container/Header";
import Init from "../../Sections/Init";
import Projects from "../../Sections/Projects";
import Skills from "../../Sections/Skills";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Init />
      <Skills />
      <Projects />
    </>
  );
};

export default Home;
