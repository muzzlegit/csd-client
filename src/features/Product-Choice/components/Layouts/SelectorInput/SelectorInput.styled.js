import styled from "@emotion/styled";

export const Container = styled.button(({ theme }) => ({
  padding: "4px",
  textAlign: "center",
  cursor: "pointer",
  borderRadius: "4px",
  fontSize: "18px",
  border: `1px solid ${theme.colors.textIdle[100]}`,
  color: theme.colors.textIdle[100],
  backgroundColor: theme.colors.primary[100],
  "&:hover": {
    border: `1px solid ${theme.colors.acent[60]}`,
    backgroundColor: theme.colors.secondary[100],
    color: theme.colors.acent[100],
  },
  transition: "all 250ms ease-in-out",
}));
