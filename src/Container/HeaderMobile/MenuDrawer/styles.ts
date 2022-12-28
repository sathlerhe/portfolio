import { styled } from "../../../../stitches.config";

import Modal from "react-modal";

export const Container = styled(Modal, {
  backgroundColor: "$bg_primary",
  height: "100vh",
  top: "0px",
  right: 0,
  outline: "none",
  display: "flex",
  flex: "1",
  flexDirection: "column",

  ".times__header": {
    width: "25px",
    height: "40px",
    color: '$text_white',
  },
});

export const MenuHeader = styled("div", {
  padding: "0 16px",
  borderBottom: "1px solid $primary",
  display: "flex",
  alignItems: "center",
  height: "130px",
  justifyContent: "space-between",
});

export const MenuBody = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "$md",
  height: "100%",

  ">a": {
    textDecoration: "none",
    borderRadius: "$sm",
    padding: "$nano",
    transition: "0.4s ease",
    fontSize: "18px",
    fontWeight: "$light",
    background: "$bg_transparent",
    color: "$primary",
  },
});
