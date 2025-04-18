import styled from "@emotion/styled";

type ControlProps = {
  isActive: boolean;
};

export const List = styled.div({
  marginTop: "12px",
  display: "flex",
  flexDirection: "column",
  gap: "6px",
  borderRadius: "8px",
});

export const Group = styled.div(({ theme }) => ({
  padding: "0 8px 8px 8px",
  borderRadius: "8px",
  border: `1px solid ${theme.colors.textIdle[10]}`,
}));

export const GroupTitle = styled.div(({ theme }) => ({
  margin: "8px 0",
  color: theme.colors.text[100],
}));

export const ControlsList = styled.div({
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "8px",
});

export const Control = styled.div<ControlProps>(({ theme, isActive }) => ({
  padding: "4px 8px",
  borderRadius: "8px",
  fontSize: "16px",
  cursor: isActive ? "default" : "pointer",
  color: isActive ? theme.colors.text[100] : theme.colors.textIdle[100],
  backgroundColor: isActive
    ? theme.colors.acent[60]
    : theme.colors.primary[100],
  ":hover": {
    boxShadow: isActive ? "none" : `0px 0px 8px ${theme.colors.acent[100]}`,
    color: isActive ? theme.colors.text[100] : theme.colors?.acent?.[100],
  },
  transition: "all 250ms ease-in-out",
}));
