import styled from "@emotion/styled";

export const Container = styled.nav(({ theme }) => ({
  width: "60px",
  minHeight: "200px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "start",
  borderRadius: "30px",
  backgroundColor: theme.colors?.white?.[10] || "#FFF",
}));

export const Item = styled.div(({ theme, isActive }) => ({
  width: "54px",
  height: "54px",
  borderRadius: "50%",
  cursor: "pointer",
  ...(isActive
    ? {
        backgroundColor: theme.colors?.white?.[30] || "#FFF",
      }
    : {}),
}));
