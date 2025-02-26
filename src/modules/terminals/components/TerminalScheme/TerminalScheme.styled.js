import styled from "@emotion/styled";

export const Container = styled.img({
  width: "300px",
  height: "200px",
});

export const Icon = styled.svg(({ theme }) => ({
  margin: "0 auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fill: theme.colors.text[100],
  stroke: theme.colors.text[100],
}));
