import styled from "@emotion/styled";

export const Button = styled.button(({ theme }) => ({
  padding: "0 12px",
  width: "fit-content",
  cursor: "pointer",
  backgroundColor: theme.colors.primary[100],
  borderRadius: "4px",
  border: `1px solid ${theme.colors.text[10]}`,
  "&:hover": {
    color: theme.colors.acent[100],
  },
}));
