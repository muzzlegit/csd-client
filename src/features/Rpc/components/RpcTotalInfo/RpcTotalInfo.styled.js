import styled from "@emotion/styled";

export const Container = styled.div(({ theme }) => ({
  padding: "16px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "6px",
  borderRadius: "8px",
  fontSize: "12px",
  color: theme.colors.text[100],
  backgroundColor: theme.colors.primary[100],
}));

export const Content = styled.div(({ theme }) => ({
  marginTop: "6px",
  paddingTop: "12px",
  width: "100%",
  borderTop: `1px solid ${theme.colors.text[80]}`,
}));

export const Wrap = styled.div({
  display: "flex",
  alignItems: "end",
  gap: "8px",
});

export const Block = styled.div({
  marginBottom: "8px",
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  gap: "6px",
});

export const Text = styled.span(({ theme }) => ({
  fontSize: "14px",
  fontWeight: 700,
  color: theme.colors.text[90],
}));

export const Title = styled.p(({ theme }) => ({
  marginBottom: "4px",
  color: theme.colors.textIdle[100],
}));

export const Acent = styled.span(({ theme }) => ({
  fontSize: "16px",
  fontWeight: 700,
  color: theme.colors.acent[100],
}));
