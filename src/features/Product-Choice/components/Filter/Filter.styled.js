import styled from "@emotion/styled";

export const Container = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "6px",
  borderRadius: "8px",
  backgroundColor: theme.colors.primary[100],
}));

export const Title = styled.div(({ theme }) => ({
  marginBottom: "8px",
  color: theme.colors.text[100],
}));

export const ValuesBox = styled.div({
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "8px",
});

export const Value = styled.div(({ theme, isActive }) => ({
  padding: "4px 8px",
  borderRadius: "8px",
  fontSize: "16px",
  cursor: isActive ? "default" : "pointer",
  color: isActive ? theme.colors.text[100] : theme.colors.textIdle[100],
  backgroundColor: isActive
    ? theme.colors.acent[60]
    : theme.colors.secondary[100],
  ":hover": {
    boxShadow: isActive ? "none" : `0px 0px 8px ${theme.colors.acent[100]}`,
    color: isActive ? theme.colors.text[100] : theme.colors?.acent?.[100],
  },
  transition:
    "box-shadow 250ms ease-in-out, background-color 250ms ease-in-out, color 250ms ease-in-out",
}));
