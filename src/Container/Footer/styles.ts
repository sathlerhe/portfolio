import { styled } from "../../../stitches.config";

export const Container = styled("footer", {
  background: "$bg_secondary",
  borderTop: "1px solid $primary", 
  width: "100%",
  padding: '$xxs',

  '@sm': {
    padding: '$xxs 0'
  }
});

export const Flex = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  '>p': {
    color: '$text_white',
    fontSize: '$body_3',
    letterSpacing: '0.7px',

    '> a': {
      color: '$text_white'
    }
  }
});
