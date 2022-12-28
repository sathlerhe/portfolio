import { styled } from "../../../stitches.config";

export const Container = styled("h4", {
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
