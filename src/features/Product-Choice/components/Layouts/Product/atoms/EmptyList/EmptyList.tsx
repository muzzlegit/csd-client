import styled from "@emotion/styled";

export const Container = styled.div(({ theme }) => ({
  width: "100%",
  height: "180px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "18px",
  color: theme.colors.warn[80],
}));

export const EmptyList = () => {
  return <Container>Поки елементів не додано</Container>;
};
