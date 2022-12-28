import { styled } from "../../../stitches.config";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "$xxxs",
  color: "$text_white",
  background: "$bg_transparent",
  width: "360px",
  padding: "$xxxs $xxs",
  borderRadius: "$xs",
  border: "0.5px solid $bg_transparent",

  "> p": {
    margin: 0,
    textAlign: "justify",
    fontSize: "$body_2",
  },

  '@xs': {
    width: '340px',
  },

  "@xxs": {
    width: "290px",
  },

  "@nano": {
    width: "235px",
  },
});

export const Experiences = styled("div", {
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  "> img": {
    width: "150px",
  },

  "@xxs": {
    "> img": {
      width: "115px",
    },
  },

  "@nano": {
    flexDirection: "column",
  },
});

export const TextExp = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "center",
  gap: "$nano",

  "> h6": {
    margin: 0,
    fontSize: "$body_1",
  },
});

export const Experience = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "$nano",
  "> img": {
    width: "50px",
    height: "50px",
  },
});

export const Img = styled("img", {
  borderRadius: "$xs",
});

export const TextInformations = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "left",
  justifyContent: "center",
  "> h5, p": {
    margin: 0,
    fontWeight: "$light",
  },
  "> h5": {
    fontSize: "13px",
  },

  "> p": {
    fontSize: "$caption_2",
  },
});

export const Divider = styled("div", {
  width: "100%",
  height: "1px",
  background: "$bg_transparent",
});
