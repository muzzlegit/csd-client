import styled from "@emotion/styled";

export const Container = styled.nav(({ theme }) => ({
  padding: "4px",
  width: "60px",
  height: "fit-content",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "start",
  gap: "16px",
  borderRadius: "30px",
  border: `1px solid ${theme.colors?.border?.[100]}`,
  backgroundColor: theme.colors?.secondary?.[100],
}));

export const Item = styled.div(({ theme, isActive }) => ({
  width: "52px",
  height: "52px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  cursor: "pointer",
  color: theme.colors?.textIdle?.[100],
  ...(isActive
    ? {
        backgroundColor: theme.colors?.acentYellow?.[100],
      }
    : {}),
}));
