import { styled } from "../../../stitches.config";

export const Container = styled("header", {
  width: "100vw",
  zIndex: 3,
  height: "130px",
  borderBottom: "1px solid $primary",
  position: "fixed",
  top: 0,
  transition: "all 0.3s",
  backgroundColor: "$bg_primary",

  "#header__row": {
    width: "100%",
    margin: "$xxxs",
  },
});

export const Flex = styled("div", {
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  ".bars__header": {
    width: "35px",
    height: "40px",
    color: "$text_white",
  },
});
