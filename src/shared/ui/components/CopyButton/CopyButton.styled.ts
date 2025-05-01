import { CSSObject } from "@emotion/react";
import styled from "@emotion/styled";
import { InitialStateType } from "./CopyButton";

type ButtonProps = {
  styles?: CSSObject;
  state: keyof InitialStateType;
};

export const Button = styled.div<ButtonProps>(({ theme, styles, state }) => {
  const colors: Record<keyof InitialStateType, string> = {
    copy: theme.colors.acent[40],
    success: theme.colors.acent[100],
    failed: theme.colors.red[100],
  };
  return {
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
  };
});
