import React, { ReactNode } from "react";

import { Container } from "./styles";

type IButton = {
  color?: "primary" | "secondary";
  href?: any;
  target?: any;
  download?: Boolean;
  children: ReactNode;
};

const Button: React.FC<IButton> = ({
  color,
  children,
  href,
  target,
  download,
}) => {
  return (
    <Container
      color={color && color}
      href={href}
      target={target}
      download={download && download}
    >
      {children}
    </Container>
  );
};

export default Button;
