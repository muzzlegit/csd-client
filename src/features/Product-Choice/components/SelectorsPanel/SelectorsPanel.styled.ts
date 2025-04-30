import styled from "@emotion/styled";

export const Container = styled.div(({ theme }) => ({
  marginLeft: "auto",
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  borderRadius: "8px",
  backgroundColor: theme.colors.secondary[100],
}));

export const ControlPanel = styled.div({
  padding: "8px 20px",
  height: "46px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: "8px",
});

export const Selectors = styled.div({
  padding: "8px",
  borderRadius: "8px",
  display: "flex",
  flexWrap: "wrap",
  gap: "8px",
});

export const ClicableWrap = styled.div({
  width: "fit-content",
});

export const Button = styled.button(({ theme }) => ({
  padding: "0 12px",
  width: "fit-content",
  cursor: "pointer",
  backgroundColor: theme.colors.secondary[100],
  borderRadius: "4px",
  border: `1px solid ${theme.colors.text[100]}`,
  color: theme.colors.text[100],
  transition: "all 300ms ease",
  "&:hover": {
    borderColor: theme.colors.acent[100],
    color: theme.colors.acent[100],
  },
}));
