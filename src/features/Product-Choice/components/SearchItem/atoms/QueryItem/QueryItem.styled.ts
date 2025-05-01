import styled from "@emotion/styled";

export const Container = styled.div({
  paddingRight: "8px",
  display: "flex",
  width: "100%",
  maxHeight: "700px",
  flexDirection: "column",
  gap: "8px",
  overflowY: "auto",
  scrollBehavior: "smooth",
  scrollbarWidth: "thin",
  "::-webkit-scrollbar": {
    width: "2px",
  },
});
