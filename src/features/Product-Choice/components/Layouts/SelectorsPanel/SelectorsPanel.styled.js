import styled from "@emotion/styled";

export const Container = styled.div(({ theme }) => ({
  marginLeft: "auto",
  padding: "8px",
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  borderRadius: "8px",
  backgroundColor: theme.colors.secondary[100],
}));

export const Selectors = styled.div(({ theme }) => ({
  padding: "8px",
  borderRadius: "8px",
  backgroundColor: theme.colors.primary[100],
}));
