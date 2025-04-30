import styled from "@emotion/styled";

export const Container = styled.div({
  paddingRight: "8px",
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

export const Separator = styled.div(({ theme }) => ({
  flexGrow: 1,
  minWidth: "40px",
  borderBottom: `1px dotted ${theme.colors.textIdle[100]}`,
}));

export const Feature = styled.div({
  display: "flex",
  alignItems: "baseline",
  gap: "6px",
  fontSize: "14px",
});

export const Property = styled.p(({ theme }) => ({
  color: theme.colors.text[100],
}));
