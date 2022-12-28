import { styled } from "../../../stitches.config";

export const Container = styled("div", {
  padding: "$xxxl $huge",
  background: '$bg_primary',

  ".skills__title": {
    color: "$primary",
  },

  '@sm': {
    padding: '$xl 0',
  }
});

export const SkillsContainer = styled("div", {
  gap: "$xxs",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  flexWrap: "wrap",
  marginLeft: "$nano",

});

export const SkillBox = styled("div", {
  width: "200px",
  height: "150px",
  border: "2px solid $bg_transparent",
  borderRadius: "$sm",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "> img": {
    width: "60%",
  },

  "> p": {
    position: "absolute",
    color: "$text_white",
    fontSize: "$header_3",
    userSelect: 'none',
  },

  "> p.hidden": {
    display: "none",
  },

  "&:hover": {
    background: "$bg_primary",
    transition: "0.2s ease",

    "> img": {
      opacity: "0.5",
    },
  },
});
