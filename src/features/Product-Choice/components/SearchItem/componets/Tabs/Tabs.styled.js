import styled from "@emotion/styled";

export const Container = styled.div({
  display: "flex",
});

export const Tab = styled.span(({ theme, isActive }) => ({
  padding: "1px 10px",
  height: "fit-content",
  cursor: "pointer",
  fontSize: "12px",
  borderRadius: "4px",
  color: theme.colors.text[100],
  backgroundColor: isActive ? theme.colors.acent[50] : "transparent",
  transition: "background-color 250ms ease-in-out",
}));
