import { styled } from "../../../stitches.config";

export const Container = styled("div", {
  padding: "$md $huge",
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "center",
  margin: '0 auto',

  "> h2": {
    color: "$primary",
  },
});

export const SkillsContainer = styled("div", {
  gap: "$xxs",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  flexWrap: "wrap",
  marginLeft: '$nano'
});

export const SkillBox = styled("div", {
  width: "280px",
  height: "200px",
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
