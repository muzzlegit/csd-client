import styled from "@emotion/styled";

export const Container = styled.div({
  height: "340px",
});

export const Wrap = styled.div({
  height: "300px",
});

export const Img = styled.img({
  height: "100%",
  width: "100%",
  objectFit: "contain",
  overflow: "hidden",
  borderRadius: "16px",
});

export const Placeholder = styled.div(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "316px",
  color: theme?.colors?.acent[10],
}));
