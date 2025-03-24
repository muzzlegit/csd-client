import styled from "@emotion/styled";

export const Link = styled.a(({ theme }) => ({
  height: "100%",
  width: "100%",
  display: "inline-block",
  fontSize: "14px",
  fontWeight: 700,
  textDecoration: "none",
  color: theme.colors.acent[80],
}));
