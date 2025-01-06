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
  "@media (max-width: 1720px)": {
    gridTemplateAreas: '"b c" "e f" "e f" "h f" "h f" "h g" "a d" "a d" "a d"',
    gridTemplateColumns: "600px 560px",
    gridTemplateRows: "repeat(9, 124px)",
    gap: "8px",
  },
  "@media (max-width: 1350px)": {
    gridTemplateAreas:
      '"b" "e" "e" "h" "h" "h" "c" "f" "f" "a" "a" "a" "d" "d" "g"',
    gridTemplateColumns: "600px",
    gridTemplateRows: "repeat(15, 124px)",
  },
});

export const Cell = styled.div(({ area }) => ({
  width: "100%",
  gridArea: area,
}));
