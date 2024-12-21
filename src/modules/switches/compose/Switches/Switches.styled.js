import styled from "@emotion/styled";

export const Container = styled.div({
  padding: "8px",
  height: "100%",
  width: "100%",
  display: "grid",
  gridTemplateAreas: '"a b c" "a e f" "a e f" "d h f" "d h f" "d h g" ',
  gridTemplateColumns: "400px 600px 560px",
  gridTemplateRows: "repeat(6, 124px)",
  gap: "16px",
  alignItems: "space-between",
  justifyContent: "center",
  overflowY: "auto",
  scrollbarWidth: "thin",
  "&::-webkit-scrollbar": {
    width: "8x",
  },
});

export const Cell = styled.div(({ area }) => ({
  width: "100%",
  gridArea: area,
}));
