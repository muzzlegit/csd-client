import styled from "@emotion/styled";

const appTemplateAreas = `
  'navbar'
  'content'
  'footer'
`;
export const Container = styled.div({
  height: "100%",
  display: "grid",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "2rem auto 3rem",
  gridGap: ".6rem",
  gridTemplateAreas: appTemplateAreas,
});
