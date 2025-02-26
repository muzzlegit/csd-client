import styled from "@emotion/styled";

export const Img = styled.img(({ theme }) => ({
  height: "60px",
  // width: "60px",
  objectFit: "contain",
  filter: `drop-shadow(0px 2px 3px ${theme.colors.black[100]})`,
}));
