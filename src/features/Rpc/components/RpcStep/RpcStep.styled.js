import styled from "@emotion/styled";

export const Container = styled.div({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  fontSize: "12px",
});

export const Description = styled.div(({ theme }) => ({
  display: "flex",
  alignItems: "baseline",
  gap: "6px",
  color: theme.colors.textIdle[100],
}));

export const Title = styled.span({});

export const Acent = styled.span(({ theme }) => ({
  display: "inline-block",
  fontSize: "14px",
  color: theme.colors.acent[100],
}));
