import styled from "@emotion/styled";

export const Container = styled.div(({ theme }) => ({
  padding: "8px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "8px",
  borderRadius: "16px",
  border: `1px solid ${theme.colors.text[10]}`,
  backgroundColor: theme.colors.secondary[100],
}));

export const Title = styled.h3(({ theme }) => ({
  display: "inline-block",
  fontSize: "18px",
  color: theme.colors.text[100],
}));
