import { styled } from "../../../stitches.config";

export const Container = styled("div", {
  padding: "$huge",
  borderBottom: "1px solid $primary",
  "@sm": {
    padding: "$huge 0",
  },
});

export const Flex = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  "@sm": {
    flexDirection: "column",
    gap: "$xxs",
    justifyContent: "center",
  },
});

export const TextContainer = styled("div", {
  color: "$text_white",
  ">h2": {
    fontSize: "46px",
    margin: "$nano 0",
  },
  "> h3": {
    fontSize: "$header_2",
    fontWeight: "$body_2",
    color: "$primary",
    letterSpacing: "3px",
    margin: "$xxxs 0",
  },

  "@xs": {
    ">h2": {
      fontSize: "36px",
    },
    "> h3": {
      fontSize: "$header_4",
    },
  },
});

export const BtnGroup = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "left",
  gap: "$xxxs",
});
