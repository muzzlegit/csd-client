import styled from "@emotion/styled";

export const Container = styled.div(({ theme, isAuth }) => ({
  width: "40px",
  height: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  cursor: "pointer",
  backgroundColor: isAuth ? theme.colors.white[60] : "transparent",
  color: isAuth ? theme.colors.red[100] : theme.colors.textIdle[100],
}));
