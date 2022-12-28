import React, {
  Dispatch,
  memo,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Container, MenuHeader, MenuBody } from "./styles";
import Logo from "../../../Components/Logo";
import { links } from "../../../utils/headerLinks";

interface IMenuDrawer {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const MenuDrawer: React.FC<IMenuDrawer> = ({ isOpen, setIsOpen, ...props }) => {
  const customStyles = {
    overlay: {
      zIndex: 3,
    },
  };

  useEffect(() => {
    let bodyTag = document.getElementsByTagName("body")[0];
    isOpen && (bodyTag.style.overflowY = "hidden");
  }, [isOpen]);

  return (
    <Container
      {...props}
      ariaHideApp={false}
      onRequestClose={() => setIsOpen(false)}
      shouldCloseOnOverlayClick
      style={customStyles}
      closeTimeoutMS={100}
      isOpen={isOpen}
    >
      <MenuHeader>
        <Logo />
        <FontAwesomeIcon
          className="times__header"
          icon={faTimes}
          onClick={() => setIsOpen(false)}
        />{" "}
      </MenuHeader>
      <MenuBody>
        {links?.map((link) => (
          <a
            onClick={() => setIsOpen(false)}
            key={link?.text}
            href={link?.link}
          >
            {link?.text}
          </a>
        ))}
      </MenuBody>
    </Container>
  );
};

export default memo(MenuDrawer);
