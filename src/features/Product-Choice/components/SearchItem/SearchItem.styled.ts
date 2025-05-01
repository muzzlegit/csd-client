import styled from "@emotion/styled";

export const Container = styled.div(({ theme }) => ({
  padding: "8px",
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "14px",
  borderRadius: "8px",
  backgroundColor: theme.colors.secondary[100],
}));

export const Title = styled.div(({ theme }) => ({
  fontSize: "20px",
  color: theme.colors.text[100],
}));

export const Acent = styled.span(({ theme }) => ({
  fontWeight: 700,
  color: theme.colors.acent[100],
}));
