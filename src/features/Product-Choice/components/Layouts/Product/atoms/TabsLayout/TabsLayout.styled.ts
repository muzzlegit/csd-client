import styled from "@emotion/styled";

export const Container = styled.div({
  width: "100%",
});

export const TabsPanel = styled.div({
  width: "100%",
  display: "flex",
  alignItems: "center",
});

type TabProps = {
  isActive: boolean;
};
export const Tab = styled.div<TabProps>(({ theme, isActive }) => ({
  padding: "6px 12px",
  width: "25%",
  textAlign: "center",
  fontSize: "14px",
  fontWeight: isActive ? 700 : 400,
  borderTopLeftRadius: "6px",
  borderTopRightRadius: "6px",
  cursor: isActive ? "default" : "pointer",
  color: isActive ? theme.colors.acent[100] : theme.colors.text[100],
  backgroundColor: isActive ? theme.colors.secondary[100] : "transparent",
  "&:hover": {
    color: theme.colors.acent[100],
  },
  transition: "all 250ms ease",
}));

export const Content = styled.div(({ theme }) => ({
  padding: "8px",
  minWidth: "400px",
  borderBottomLeftRadius: "8px",
  borderBottomRightRadius: "8px",
  backgroundColor: theme.colors.secondary[100],
}));
