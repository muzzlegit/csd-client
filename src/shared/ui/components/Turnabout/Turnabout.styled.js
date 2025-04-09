import styled from "@emotion/styled";

export const Container = styled.div({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
});

export const Wrap = styled.div({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const Button = styled.div(({ theme, isActive }) => ({
  padding: "4px",
  border: "none",
  backgroundColor: "transparent",
  outline: "nones",
  cursor: "pointer",
  opacity: isActive ? 1 : 0,
  color: theme.colors.text[100],
  "&:hover": {
    color: theme.colors.acent[100],
  },
}));

export const ImageWrap = styled.div(({ theme, size }) => ({
  height: size + "px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.colors.acent[10],
}));

export const Img = styled.img({
  height: "100%",
  width: "100%",
  objectFit: "contain",
  overflow: "hidden",
  borderRadius: "4px",
  loading: "lazy",
});
