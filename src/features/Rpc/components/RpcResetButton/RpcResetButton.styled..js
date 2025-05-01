import styled from "@emotion/styled";

export const Button = styled.button(({ theme }) => ({
  padding: "4px 6px",
  width: "fit-content",
  display: "flex",
  alignItems: "center",
  gap: "8px",
  outline: "none",
  cursor: "pointer",
  fontSize: "14px",
  color: theme.colors.warn[80],
  borderRadius: "8px",
  border: "none",
  backgroundColor: theme.colors.primary[100],
  transitionProperty: "color, background-color",
  transitionDuration: "250ms ",
  transitionTimingFunction: "ease-in-out, ",
  "&:hover": {
    color: theme.colors.red[80],
    backgroundColor: theme.colors.primary[100],
  },
}));
