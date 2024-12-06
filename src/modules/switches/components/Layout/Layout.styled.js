import styled from "@emotion/styled";

export const Container = styled.div(({ theme }) => ({
  width: "100%",
  borderRadius: "16px",
  overflow: "hidden",
  border: `1px solid ${theme.colors.border[100]}`,
  backgroundColor: theme.colors.secondary[100],
}));

export const Header = styled.div(({ theme }) => ({
  height: "34px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.colors.acentYellow[80],
}));

export const Title = styled.p(({ theme }) => ({
  fontSize: "18px",
  fontWeight: 700,
  color: theme.colors.primary[100],
}));

export const Content = styled.div({
  padding: "10px 12px",
  width: "100%",
});
