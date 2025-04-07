import styled from "@emotion/styled";

export const Container = styled.div(({ theme }) => ({
  padding: "6px 6px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "6px",
  borderRadius: "4px",
  border: `1px solid ${theme.colors.textIdle[30]}`,
  overflowY: "auto",
  scrollbarWidth: "thin",
  "&::-webkit-scrollbar": {
    width: "4px",
  },
}));

export const Item = styled.span(({ theme }) => ({
  cursor: "pointer",
  fontSize: "14px",
  color: theme.colors.text[80],
  "&:hover": { color: theme.colors.acent[100] },
}));

export const Acent = styled.span(({ theme }) => ({
  color: theme.colors.acent[100],
}));
