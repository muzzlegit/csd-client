import styled from "@emotion/styled";

export const Container = styled.div(({ theme }) => ({
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  backgroundColor: theme.colors?.primary?.[100] || "#FFF",
}));

export const Wrap = styled.div({
  padding: "0 16px",
  height: "100%",
  display: "flex",
});

export const TemporaryWrap = styled.div({
  paddingBottom: "16px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
});

export const Module = styled.main(({ theme }) => ({
  padding: "8px",
  height: "100%",
  width: "100%",
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
