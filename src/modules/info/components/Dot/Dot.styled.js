import styled from "@emotion/styled";

export const Container = styled.div(({ theme }) => ({}));

export const DotBox = styled.div(({ theme, selected }) => ({
  width: "20px",
  height: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  borderRadius: "50%",
  border: `2px solid ${
    selected ? theme.colors?.acentYellow?.[100] : theme.colors?.text?.[60]
  }`,
  backgroundColor: theme.colors?.primary?.[20],
}));

export const Color = styled.div(({ theme, selected }) => ({
  width: "60%",
  height: "60%",
  borderRadius: "50%",
  ...(selected ? { backgroundColor: theme.colors?.acentYellow?.[100] } : {}),
}));
