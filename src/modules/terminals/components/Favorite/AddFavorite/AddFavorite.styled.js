import styled from "@emotion/styled";

export const Container = styled.div(({ theme, isActive }) => ({
  color: isActive ? theme.colors.acent[100] : theme.colors.text[100],
  cursor: "pointer",
  "&:hover": {
    color: theme.colors.acent[100],
  },
}));
