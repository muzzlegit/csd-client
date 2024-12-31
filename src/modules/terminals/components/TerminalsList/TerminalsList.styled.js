import styled from "@emotion/styled";

export const Container = styled.div(({ theme }) => ({
  padding: "6px",
  borderRadius: "8px",
  backgroundColor: theme.colors.secondary[100],
}));

export const List = styled.div({
  height: "188px",
  width: "460px",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  overflowY: "auto",
  scrollbarWidth: "thin",
  "&::-webkit-scrollbar": {
    width: "8x",
  },
});

export const Item = styled.div(({ theme }) => ({
  padding: "4px",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "14px",
  color: theme.colors.textIdle[100],
  "&:hover": {
    backgroundColor: theme.colors.primary[70],
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
