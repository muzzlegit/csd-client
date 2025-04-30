import styled from "@emotion/styled";

type ImageWrapProps = {
  height?: string;
  width?: string;
};

export const ImageWrap = styled.div<ImageWrapProps>(
  ({ theme, height, width }) => ({
    height: height + "px",
    width: width + "px",
    minHeight: "20px",
    minWidth: "40px",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.colors.acent[10],
  })
);

export const Img = styled.img({
  height: "100%",
  width: "100%",
  objectFit: "contain",
  overflow: "hidden",
  loading: "lazy",
});
