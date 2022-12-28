import { styled } from "../../../stitches.config";

export const Container = styled("a", {
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "150px",
  height: "30px",
  padding: "$nano",
  fontSize: "18px",
  borderRadius: "$xs",
  cursor: "pointer",
  transition: "0.4s ease",

  "&:hover": {
    opacity: "0.7",
  },

  "@xs": {
    width: "100px",
    height: "30px",
    textAlign: "center",
  },

  variants: {
    color: {
      primary: {
        backgroundImage:
          "linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(101deg, #4e704b, #00a82c)",
        color: "$text_white",
      },
      secondary: {
        border: "solid 2px transparent",
        backgroundImage:
          "linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(101deg, #4e704b, #00a82c)",
        color: "$primary",
        backgroundOrigin: " border-box",
        backgroundClip: "content-box, border-box",
        boxShadow: "2px 1000px 1px #000 inset",
      },
    },
  },

  defaultVariants: {
    color: "primary",
  },
});
