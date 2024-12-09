import styled from "@emotion/styled";

export const Container = styled.div(({ theme }) => ({
  maxHeight: "400px",
  overflowY: "scroll",
  color: theme.colors.textIdle[100],
}));

export const Item = styled.div(({ theme }) => ({
  display: "flex",
  alignItems: "baseline",
  gap: "4px",
  cursor: "pointer",
  whiteSpace: "nowrap",
  "&:hover": {
    color: theme.colors.text[100],
  },
}));
