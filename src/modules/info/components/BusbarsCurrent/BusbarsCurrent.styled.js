import styled from "@emotion/styled";
import { configObj } from "./config";

export const Container = styled.div(({ theme, type }) => ({
  padding: "12px",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  borderRadius: "16px",
  border: `1px solid ${theme.colors?.border?.[100]}`,
  backgroundColor: theme.colors?.secondary?.[100],
  color: configObj.color[type],
}));

export const Title = styled.p(({ theme }) => ({
  textAlign: "center",
  width: "100%",
  fontSize: "20px",
  fontWeight: 700,
  borderBottom: `1px solid ${theme.colors.border[100]}`,
}));

export const DotBox = styled.div(() => ({
  display: "flex",
  alignItems: "center",
  gap: "6px",
}));

export const CurrentBox = styled.div({
  margin: "0 auto",
  minHeight: "68px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

export const Wrap = styled.div({
  display: "flex",
  alignItems: "center",
  gap: "8px",
});

export const Current = styled.span({
  fontSize: "18px",
  fontWeight: 700,
});
