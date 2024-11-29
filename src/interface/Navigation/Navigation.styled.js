import styled from "@emotion/styled";
import { theme } from "shared/theme/theme";

const { token2 } = theme.colors;

export const Container = styled.nav(
  {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    gap: "16px",
    fontSize: "14px",
    overflow: "hidden",
    transition: "width 400ms ease-in-out",
  },
  (props) => ({
    width: props.isCollapse ? "50px" : "180px",
    alignItems: props.isCollapse ? "center" : "start",
  })
);

export const LinksList = styled.div({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "8px",
  alignItems: "center",
});

export const Button = styled.div({
  marginLeft: "auto",
  width: "30px",
  height: "30px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  fill: theme.colors.token2[20],
  border: `1px solid ${theme.colors.token2[20]}`,
  borderRadius: "4px",
  transition: "fill 260ms ease-in-out, border-color 260ms ease-in-out",
  "&:hover": {
    borderColor: token2[100],
    fill: token2[100],
  },
});
