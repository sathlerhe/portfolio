import { styled } from "../../../stitches.config";

export const Container = styled("div", {
  background: "$bg_primary",
  padding: "$xxxl $huge",

  h2: {
    color: "$primary",
  },

  "@sm": {
    padding: "$xl 0",
  },
});

export const SMContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "$xxs",
});

export const SMBox = styled("a", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "70px",
  height: "70px",
  background: "$bg_transparent",
  borderRadius: "$xs",

  "&:hover": {
    "> img": {
      filter: "grayscale(0%)",
    },
  },

  "@sm": {
    "> img": {
      filter: "grayscale(0%)",
    },
  },
});

export const Img = styled("img", {
  width: "60%",
  filter: "grayscale(90%)",
  transition: "0.4s ease",
});
