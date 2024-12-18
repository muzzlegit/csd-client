import styled from "@emotion/styled";

export const Container = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "8px",
});

export const Wrap = styled.div({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const Button = styled.div(({ theme }) => ({
  padding: "4px",
  border: "none",
  backgroundColor: "transparent",
  outline: "nones",
  cursor: "pointer",
  color: theme?.colors?.text[100],
  "&:hover": {
    color: theme?.colors?.acent[100],
  },
}));
