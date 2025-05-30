import styled from "@emotion/styled";

export const Container = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  gap: "8px",
});

export const Step = styled.div(({ theme, isWarn }) => ({
  padding: "2px 4px 2px 2px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: "8px",
  borderRadius: "6px",
  backgroundColor: isWarn ? theme.colors.red[10] : theme.colors.secondary[100],
}));

export const Position = styled.span(({ theme }) => ({
  display: "inline-block",
  width: "20px",
  textAlign: "right",
  fontSize: "12px",
  color: theme.colors.textIdle[100],
}));

export const CopyBox = styled.div(({ theme, isVisible }) => ({
  width: "18px",
  height: "18px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: isVisible ? "pointer" : "default",
  color: theme.colors.textIdle[100],
  "&:hover": {
    color: theme.colors.acent[80],
  },
}));
