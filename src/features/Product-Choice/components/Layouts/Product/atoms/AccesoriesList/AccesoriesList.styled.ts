import styled from "@emotion/styled";

export const Container = styled.div({
  padding: "8px",
  maxHeight: "300px",
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

export const Accessory = styled.div({
  display: "flex",
  alignItems: "baseline",
  justifyContent: "space-between",
  gap: "6px",
  fontSize: "14px",
});

export const Property = styled.p(({ theme }) => ({
  cursor: "pointer",
  "&:hover": {
    color: theme.colors.acent[60],
  },
  color: theme.colors.text[100],
  transition: "all 250ms ease",
}));
