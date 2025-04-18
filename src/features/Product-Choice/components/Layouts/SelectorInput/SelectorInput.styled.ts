import styled from "@emotion/styled";

export const Container = styled.button(({ theme }) => ({
  padding: "10px",
  height: "100px",
  width: "140px",
  textAlign: "center",
  wordWrap: "break-word",
  cursor: "pointer",
  borderRadius: "4px",
  fontSize: "16px",
  border: `1px solid ${theme.colors.textIdle[100]}`,
  color: theme.colors.text[100],
  backgroundColor: theme.colors.primary[100],
  "&:hover": {
    border: `1px solid ${theme.colors.acent[60]}`,
    backgroundColor: theme.colors.secondary[100],
    color: theme.colors.acent[100],
  },
  transition: "all 250ms ease-in-out",
}));
