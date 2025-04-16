import styled from "@emotion/styled";

export const Container = styled.div(({ theme }) => ({
  flexGrow: 1,
  padding: "6px 6px",
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  gap: "16px",
  arginTop: "16px",
  borderRadius: "4px",
  border: `1px solid ${theme.colors.textIdle[30]}`,
  overflowY: "auto",
  scrollbarWidth: "thin",
  "&::-webkit-scrollbar": {
    width: "4px",
  },
}));

export const SectionTitle = styled.span(({ theme }) => ({
  padding: "1px 8px",
  width: "100%",
  fontWeight: 600,
  color: theme.colors.acent[40],
  backgroundColor: theme.colors.text[10],
}));

export const File = styled.a(({ theme }) => ({
  paddingLeft: "12px",
  textDecoration: "none",
  fontSize: "12px",
  color: theme.colors.text[100],
  transition: "color 250ms ease-in-out",
  "&:focus,:hover": {
    color: theme.colors.warn[100],
  },
}));

export const FlexWrap = styled.div({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  gap: "8px",
});
