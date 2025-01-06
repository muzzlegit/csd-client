import styled from "@emotion/styled";

export const Container = styled.div(({ theme }) => ({
  paddingRight: "8px",
  maxHeight: "480px",
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  overflowY: "auto",
  overflowX: "none",
  scrollbarWidth: "thin",
  "&::-webkit-scrollbar": {
    width: "8x",
  },
  fontSize: "14px",
  color: theme.colors.textIdle[100],
  "@media (max-width: 1720px)": {
    maxHeight: "460px",
  },
  "@media (max-width: 1350px)": {
    maxHeight: "200px",
  },
}));

export const Item = styled.div(({ theme }) => ({
  display: "flex",
  alignItems: "baseline",
  gap: "10px",
  cursor: "pointer",
  whiteSpace: "nowrap",
  "&:hover": {
    color: theme.colors.text[100],
  },
}));

export const Acent = styled.p(({ theme }) => ({
  color: theme.colors.text[100],
}));
