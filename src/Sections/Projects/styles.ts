import { styled } from "../../../stitches.config";

export const Container = styled("div", {
  background: "$bg_primary",
  padding: "$xxxl $huge",

  h2: {
    color: "$primary",
  },

  '@sm': {
    padding: '0',
  }
});

export const ProjectsContainer = styled("div", {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  flexWrap: 'wrap',
  gap: '$xxxs',
  marginLeft: '$xxxs',

  '@xs': {
    marginLeft: '0',
  }
});

export const ProjectBox = styled("div", {
  width: "345px",
  height: "370px",
  background: "$bg_transparent",
  border: '2px solid $bg_transparent_2',
  borderRadius: "$sm",
  padding: "$xxxs $nano",
  display: "flex",
  flexDirection: "column",
  alignItems: "baseline",
  justifyContent: "space-between",

  '@nano': {
    width: "270px",
  }
});

export const TextBox = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "baseline",
  justifyContent: "flex-start",
  padding: "$nano $quarck",
  gap: "$nano",

  "> h4, p": {
    margin: 0,
    color: "$text_white",
    padding: "0 $xxxs",
  },

  "> h4": {
    fontSize: "$header_5",
    fontWeight: "$body_2",
  },
});

export const ImgBox = styled("div", {
  borderRadius: "$sm",
  alignSelf: "center",
  width: "330px",
  height: "190px",
  backgroundSize: "cover",
  backgroundPosition: "center",

  '@nano': {
    width: "260px",
  }
});

export const LinksBox = styled("div", {
  padding: "0 $xxxs",
  display: "flex",
  alignItems: "start",
  justifyContent: "center",
  gap: "$xxxs",

  "> a": {
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
