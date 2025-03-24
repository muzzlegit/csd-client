import styled from "@emotion/styled";

export const Container = styled.div(({ theme }) => ({
  padding: "6px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "6px",
  borderRadius: "8px",
  color: theme.colors.text[100],
  backgroundColor: theme.colors.primary[100],
}));

export const Title = styled.h3(({ theme }) => ({
  fontSize: "12px",
  color: theme.colors.textIdle[100],
}));

export const Wrap = styled.div({
  width: "80px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "8px",
  borderRadius: "8px",
});

export const Coefficient = styled.span({
  fontSize: "14px",
  fontWeight: 700,
});

export const Button = styled.button(({ theme }) => ({
  width: "18px",
  height: "18px",
  borderRadius: "50%",
  border: "none",
  cursor: "pointer",
  fontWeight: 700,
  backgroundColor: theme.colors.textIdle[100],
}));
