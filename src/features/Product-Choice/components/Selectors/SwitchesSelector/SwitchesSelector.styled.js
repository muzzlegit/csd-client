import styled from "@emotion/styled";

export const Container = styled.div(({ theme }) => ({
  padding: "8px",
}));

export const List = styled.div(({ theme }) => ({
  marginTop: "24px",
  height: "500px",
  display: "flex",
  flexDirection: "column",
  gap: "6px",
  overflowY: "auto",
  scrollBehavior: "smooth",
  scrollbarWidth: "thin",
  "::-webkit-scrollbar": {
    width: "2px",
  },
}));

export const Item = styled.div(({ theme }) => ({
  fontSize: "16px",
  color: theme.colors.textIdle[100],
  cursor: "pointer",
  "&:hover": {
    color: theme.colors.acent[100],
  },
  transition:
    "box-shadow 250ms ease-in-out, background-color 250ms ease-in-out, color 250ms ease-in-out",
}));
