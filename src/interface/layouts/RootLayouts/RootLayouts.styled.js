import styled from "@emotion/styled";
import { theme } from "shared/theme/theme";

export const Container = styled.div({
  display: "flex",
  justifyContent: "space-between",
  width: "100vw",
  height: "100vh",
  backgroundColor: theme.colors.token1[100],
});

export const ContentBox = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "100%",
});

export const NavContainer = styled.div({
  padding: "8px",
  borderLeft: `1px solid ${theme.colors.token3[20]}`,
});
