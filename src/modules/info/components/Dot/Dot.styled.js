import styled from "@emotion/styled";

export const Container = styled.div(({ theme, selected }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "2px",
  fontSize: "14px",
  ...(selected ? { color: theme.colors?.acentBlue?.[100] } : {}),
}));

export const DotBox = styled.div(({ theme, selected }) => ({
  width: "20px",
  height: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  borderRadius: "50%",
  border: `1px solid ${
    selected ? theme.colors?.acentBlue?.[100] : theme.colors?.textIdle?.[60]
  }`,
  backgroundColor: theme.colors?.primary?.[20],
}));

export const Color = styled.div(({ theme, selected }) => ({
  width: "60%",
  height: "60%",
  borderRadius: "50%",
  ...(selected ? { backgroundColor: theme.colors?.acentBlue?.[100] } : {}),
}));
