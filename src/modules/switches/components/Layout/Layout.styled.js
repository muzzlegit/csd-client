import styled from "@emotion/styled";

export const Container = styled.div(({ theme }) => ({
  minHeight: "130px",
  minWidth: "200px",
  width: "100%",
  borderRadius: "16px",
  backgroundColor: theme.colors.secondary[100],
}));

export const Header = styled.div(({ theme }) => ({
  height: "34px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderTopRightRadius: "16px",
  borderTopLeftRadius: "16px",
  backgroundColor: theme.colors.white[20],
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
