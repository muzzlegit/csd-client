import styled from "@emotion/styled";

export const List = styled.div({
  maxHeight: "280px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  overflowY: "auto",
  scrollbarWidth: "thin",
  "&::-webkit-scrollbar": {
    width: "8x",
  },
});

export const Item = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const Description = styled.p(({ theme, isActive }) => ({
  padding: "8px",
  fontSize: "14px",
  cursor: "pointer",
  borderRadius: "2px",
  fontWeight: isActive ? 700 : 400,
  color: isActive ? theme.colors.text[100] : theme.colors.textIdle[100],
  backgroundColor: isActive ? theme.colors.acent[20] : "transparent",
  "&:hover": {
    color: theme.colors.text[100],
  },
}));

export const Dummy = styled.div(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "24px",
  color: theme.colors.textIdle[30],
}));
