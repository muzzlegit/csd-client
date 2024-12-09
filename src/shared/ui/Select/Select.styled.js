import styled from "@emotion/styled";

export const Container = styled.div({
  height: "100%",
  display: "flex",
  alignItems: "center",
  gap: "4px",
});

export const Label = styled.div(({ theme }) => ({
  fontSize: "14px",
  color: theme.colors?.text[100],
}));

export const Wrap = styled.div(({ width }) => ({
  position: "relative",
  width,
}));

export const Button = styled.div(({ theme }) => ({
  width: "100%",
  height: "100%",
  padding: "2px 4px 2px 8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "end",
  gap: "4px",
  borderRadius: "6px",
  cursor: "pointer",
  fontSize: "12px",
  color: theme.colors?.text[100],
  backgroundColor: theme.colors?.primary[80],
}));

export const List = styled.div(({ theme }) => ({
  position: "absolute",
  zIndex: 20,
  bottom: 0,
  left: "50%",
  translate: "-50% 102%",
  width: "100%",
  textAlign: "center",
  borderRadius: "4px",
  border: `1px solid ${theme.colors.border[100]}`,
  backgroundColor: theme.colors?.primary[100],
}));

export const Item = styled.div(({ theme }) => ({
  width: "100%",
  padding: "4px 4px",
  fontSize: "14px",
  cursor: "pointer",
  color: theme.colors?.textIdle[100],
  "&:hover": {
    fontWeight: 700,
    color: theme.colors?.text[100],
    backgroundColor: theme.colors?.primary[30],
  },
}));
