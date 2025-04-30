import styled from "@emotion/styled";

export const Container = styled.div({
  width: "100%",
  height: "800px",
  display: "flex",
  gap: "16px",
  overflowY: "auto",
  scrollbarWidth: "thin",
  "::-webkit-scrollbar": {
    width: "2px",
  },
  "@media (max-width: 1740px)": {
    flexDirection: "column",
    alignItems: "center",
  },
});

export const Row = styled.div({
  display: "flex",
  gap: "16px",
});

export const Col = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});
