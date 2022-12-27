import { styled } from "../../../stitches.config";

export const Container = styled("header", {
  background: "$bg_primary",
  borderBottom: "1px solid $primary",
  position: "fixed",
  width: "100%",
  zIndex: 3,
});

export const Flex = styled("header", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const Title = styled("h4", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  color: "$text_white",
  fontSize: "$header_6",
  fontWeight: "$header_5",

  "> i": {
    color: "$primary",
    fontStyle: "normal",
    margin: "5px",
    fontSize: "$header_4",
  },
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
