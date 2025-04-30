import { CSSObject } from "@emotion/react";
import styled from "@emotion/styled";
import { theme } from "styles/theme";
import { InitialStateType } from "./CopyButton";

const colors: Record<keyof InitialStateType, string> = {
  copy: theme.colors.acent[40],
  success: theme.colors.acent[100],
  failed: theme.colors.red[100],
};

type ButtonProps = {
  styles?: CSSObject;
  state: keyof typeof colors;
};

export const Button = styled.div<ButtonProps>(({ theme, styles, state }) => ({
  padding: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  border: "none",
  cursor: "pointer",
  backgroundColor: "transparent",
  color: colors[state],
  "&:hover": { color: theme.colors.acent[100] },
  transition: "color 250ms ease",
  ...styles,
}));
