import styled from "@emotion/styled";

export const Container = styled.div({
  height: "100%",
  width: "100%",
  display: "grid",
  gridTemplateAreas: '"a b c" "d e f" "g h f" "g h i"',
  gridTemplateRows: "repeat(4, minmax(80px, auto))",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "4px",
});

export const Cell = styled.div(({ area }) => ({
  width: "100%",
  gridArea: area,
}));
