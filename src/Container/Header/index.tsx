import { Container, Title, Menu } from "./styles";

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
      <Title>
        <i>{"<"}</i>
        HenriqueSathler
        <i>{"/>"}</i>
      </Title>

      <Menu>
        {links?.map((link) => (
          <a key={link?.text} href={link?.link}>{link?.text}</a>
        ))}
      </Menu>
    </Container>
  );
};

export default Header;
