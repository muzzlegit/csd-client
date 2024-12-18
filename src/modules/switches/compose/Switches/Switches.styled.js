import styled from "@emotion/styled";

export const Container = styled.div({
  padding: "8px",
  height: "100%",
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
  alignItems: "start",
  justifyContent: "center",
  gap: "8px",
  overflowY: "auto",
  scrollbarWidth: "thin",
  "&::-webkit-scrollbar": {
    width: "8x",
  },
});

export const Column = styled.div({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "8px",
});
