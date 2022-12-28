import React from "react";
import { useMediaQuery } from "@react-hook/media-query";

import { media } from "../../../stitches.config";
import Footer from "../../Container/Footer";
import Header from "../../Container/Header";
import Contact from "../../Sections/Contact";
import Init from "../../Sections/Init";
import Projects from "../../Sections/Projects";
import Skills from "../../Sections/Skills";
import HeaderMobile from "../../Container/HeaderMobile";
import { Container } from "./styles";

const Home: React.FC = () => {
  const isMobile = useMediaQuery(media.xs);
  return (
    <Container>
      {isMobile ? <HeaderMobile /> : <Header />}
      <Init />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </Container>
  );
};

export default Home;
