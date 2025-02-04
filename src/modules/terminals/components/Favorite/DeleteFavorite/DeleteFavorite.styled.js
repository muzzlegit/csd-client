import styled from "@emotion/styled";

export const Container = styled.div(({ theme }) => ({
  cursor: "pointer",
  color: theme.colors.red[30],
  "&:hover": {
    color: theme.colors.red[100],
  },
}));
