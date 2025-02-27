import styled from "@emotion/styled";

export const Container = styled.div(({ theme }) => ({
  padding: "12px",
  minWidth: "400px",
  height: "fit-content",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  borderRadius: "16px",
  border: `1px solid ${theme.colors?.border?.[100]}`,
  backgroundColor: theme.colors?.secondary?.[100],
  color: theme.colors.textIdle[100],
}));

export const Title = styled.p(({ theme, bgColor }) => ({
  textAlign: "center",
  width: "100%",
  fontSize: "20px",
  fontWeight: 700,
  color: theme.colors.primary[100],
  backgroundColor: bgColor,
}));
