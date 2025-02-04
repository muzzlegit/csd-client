import styled from "@emotion/styled";

export const Backdrop = styled.div(({ theme }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 9999,
  width: "100%",
  height: "100%",
  backgroundColor: theme.colors.primary[80],
}));

export const Content = styled.div({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
});
