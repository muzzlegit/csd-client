import styled from "@emotion/styled";

export const Container = styled.div({
  minHeight: "130px",
  display: "flex",
  flexDirection: "column",
  gap: "4px",
});

export const Wrap = styled.div(({ theme }) => ({
  display: "flex",
  gap: "4px",
  color: theme.colors.text[100],
}));

export const Label = styled.p(({ theme }) => ({
  color: theme.colors.textIdle[100],
}));
