import styled from "@emotion/styled";

export const Container = styled.div(({ theme }) => ({
  padding: "8px",
  // height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "14px",
  borderRadius: "8px",
  backgroundColor: theme.colors.secondary[100],
}));

export const Title = styled.div(({ theme }) => ({
  fontSize: "16px",
  color: theme.colors.text[100],
}));

export const Acent = styled.span(({ theme }) => ({
  fontWeight: 700,
  color: theme.colors.acent[100],
}));
