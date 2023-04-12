import styled from "@emotion/styled";
import theme from "shared/constants/theme";

export const NavSection = styled.nav({
  padding: ".5rem 0",
  gridArea: "navbar",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",
  borderBottom: `1px solid ${theme.colors.pink}`,
});
export const NavLinkItem = styled.div({});
export const NavLinkText = styled.span({
  fontSize: "1.25rem",
  "&:hover": {
    color: theme.colors.pink,
  },
});
