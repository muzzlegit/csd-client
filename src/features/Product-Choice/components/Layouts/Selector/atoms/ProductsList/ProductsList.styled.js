import styled from "@emotion/styled";

export const List = styled.div({
  marginTop: "24px",
  height: "400px",
  display: "flex",
  flexDirection: "column",
  gap: "6px",
  overflowY: "auto",
  scrollBehavior: "smooth",
  scrollbarWidth: "thin",
  "::-webkit-scrollbar": {
    width: "2px",
  },
});

export const Item = styled.div(({ theme }) => ({
  fontSize: "16px",
  color: theme.colors.textIdle[100],
  cursor: "pointer",
  "&:hover": {
    color: theme.colors.acent[100],
  },
  transition: "all 250ms ease-in-out",
}));
