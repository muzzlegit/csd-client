import styled from "@emotion/styled";

export const Container = styled.div(({ theme }) => ({
  // display: "flex",
  // alignItems: "center",
}));

export const TabsPanel = styled.div(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));

export const Tab = styled.div(({ theme, isActive }) => ({
  padding: "4px 16px",
  color: isActive ? theme.colors.acent[100] : theme.colors.text[100],
  cursor: "pointer",
  borderTopLeftRadius: "6px",
  borderTopRightRadius: "6px",
  backgroundColor: isActive
    ? theme.colors.primary[100]
    : theme.colors.secondary[100],
}));

export const Content = styled.div(({ theme }) => ({
  maxHeight: "100%",
  padding: "8px",
  backgroundColor: theme.colors.primary[100],
}));
