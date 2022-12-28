import { styled } from "../../../stitches.config";

export const Container = styled("header", {
  background: "$bg_primary",
  borderBottom: "1px solid $primary",
  position: "fixed",
  width: "100%",
  zIndex: 3,
});

export const Flex = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const Menu = styled("nav", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "$md",

  "> a": {
    textDecoration: "none",
    color: "$text_white",
    borderRadius: "$sm",
    padding: "$nano",
    transition: "0.4s ease",
    fontSize: "18px",
    fontWeight: "$light",

    "&:hover": {
      background: "$bg_transparent",
      color: "$primary",
    },
  },
});
