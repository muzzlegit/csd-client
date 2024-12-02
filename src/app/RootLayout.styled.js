import styled from "@emotion/styled";

export const Container = styled.main(({ theme }) => ({
  padding: "16px",
  height: "100%",
  width: "100%",
  display: "flex",
  gap: "8px",
  backgroundColor: theme.colors?.primary?.[100] || "#FFF",
}));

export const Module = styled.section(({ theme }) => ({
  padding: "8px",
  height: "100%",
  width: "100%",
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
