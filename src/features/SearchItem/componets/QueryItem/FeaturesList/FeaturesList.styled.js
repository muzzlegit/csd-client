import styled from "@emotion/styled";

export const Container = styled.div(({ theme }) => ({
  padding: "6px 6px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "2px",
  borderRadius: "4px",
  border: `1px solid ${theme.colors.textIdle[30]}`,
  overflowY: "auto",
  scrollbarWidth: "thin",
  "&::-webkit-scrollbar": {
    width: "4px",
  },
}));

export const Item = styled.span(({ theme }) => ({
  fontSize: "12px",
  color: theme.colors.textIdle[100],
}));

export const Acent = styled.span(({ theme }) => ({
  color: theme.colors.text[100],
}));
