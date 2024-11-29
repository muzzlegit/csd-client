import styled from "@emotion/styled";
import { theme } from "shared/theme/theme";

const { token2, token4 } = theme.colors;

export const Item = styled.div(
  {
    padding: "4px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: "4px",
    borderRadius: "4px",
    transition:
      "color 260ms ease-in-out, fill 260ms ease-in-out, border-color 260ms ease-in-out",
    cursor: "pointer",
    "&:hover": {
      color: token4[100],
      fill: token4[100],
      borderColor: token4[100],
    },
  },
  (props) => ({
    border: `1px solid ${props.isActive ? token4[100] : token2[100]}`,
    fill: props.isActive ? token4[100] : token2[100],
    color: props.isActive ? token4[100] : token2[100],
  })
);

export const LinkWrap = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "start",
  gap: "8px",
});

export const LinkText = styled.span(
  {
    display: "block",
    overflow: "hidden",
  },
  (props) => ({
    transition: "max-height 400ms ease-in-out, max-width 600ms ease-in-out",
    maxHeight: props.isCollapse ? "0px" : "100%",
    maxWidth: props.isCollapse ? "0px" : "100%",
  })
);
