import styled from "@emotion/styled";

export const Container = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  color: theme.colors.textIdle[100],
}));

export const Wrap = styled.div({
  display: "flex",
  alignItems: "baseline",
  gap: "4px",
});

export const Item = styled.span(({ theme, color }) => ({
  fontWeight: 700,
  color: color ? color : theme.colors.text[100],
}));
