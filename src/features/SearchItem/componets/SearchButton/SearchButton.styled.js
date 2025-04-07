import styled from "@emotion/styled";

export const Button = styled.button(({ theme }) => ({
  padding: "6px",
  display: "flex",
  alignItems: "center",
  gap: "8px",
  fontSize: "14px",
  outline: "none",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  color: theme.colors.text[100],
  backgroundColor: theme.colors.primary[100],
  transition: "color 250ms ease-in-out, background-color 250ms ease-in-out",
  "&:hover": {
    color: theme.colors.warn[60],
  },
  "&:active": {
    backgroundColor: theme.colors.acent[60],
  },
}));
