import styled from "@emotion/styled";

export const Container = styled.div({
  display: "flex",
  width: "100%",
  flexDirection: "column",
  gap: "8px",
});

export const ImageWrap = styled.div({
  width: "400px",
});

export const Title = styled.span(({ theme }) => ({
  padding: "4px",
  width: "100%",
  textAlign: "center",
  color: theme.colors.acent[100],
  backgroundColor: theme.colors.text[10],
}));

export const FlexWrap = styled.div({
  display: "flex",
  alignItems: "start",
  gap: "6px",
});

export const FlexWrapCol = styled.div({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "6px",
});
