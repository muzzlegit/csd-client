import styled from "@emotion/styled";

export const Container = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "6px",
});

export const Wrap = styled.div(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "6px",
  color: theme.colors.acent[100],
}));

export const Cell = styled.div(({ theme, color, isActive }) => ({
  padding: "4px",
  width: "24px",
  height: "24px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "4px",
  boxShadow: isActive ? `0 0 2px 2px ${theme.colors.acent[100]}` : "none",
  border: isActive ? `2px solid ${theme.colors.primary[100]}` : "none",
  cursor: "pointer",
  background: color,
  overflow: "hidden",
}));

export const Index = styled.span(({ theme, shouldRevers }) => ({
  color: shouldRevers ? theme.colors.text[100] : theme.colors.primary[100],
  fontSize: "18px",
}));
