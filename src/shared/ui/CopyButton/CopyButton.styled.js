import styled from "@emotion/styled";
import { theme } from "styles/theme";

const colors = {
  copy: theme.colors.acent[40],
  success: theme.colors.acent[100],
  failed: theme.colors.red[100],
};

export const Button = styled.button(({ styles, state }) => ({
  padding: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "none",
  cursor: "pointer",
  backgroundColor: "transparent",
  color: colors[state],
  ...styles,
}));
