import styled from "@emotion/styled";

export const Container = styled.div({
  width: "100%",
  height: "100%",
  display: "flex",
  flexWrap: "wrap",
  gap: "16px",
  overflowY: "scroll",
  scrollbarWidth: "thin",
  "::-webkit-scrollbar": {
    width: "2px",
  },
});
