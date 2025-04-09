import styled from "@emotion/styled";

export const Container = styled.button(({ theme }) => ({
  padding: "4px",
  textAlign: "center",
  cursor: "pointer",
  borderRadius: "4px",
  border: `1px solid ${theme.colors.textIdle[100]}`,
  color: theme.colors.textIdle[100],
  backgroundColor: theme.colors.primary[100],
}));
