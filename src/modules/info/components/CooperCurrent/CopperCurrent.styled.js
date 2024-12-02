import styled from "@emotion/styled";

export const Container = styled.div(({ theme }) => ({
  padding: "6px",
  width: "200px",
  height: "200px",
  borderRadius: "16px",
  border: `1px solid ${theme.colors?.border?.[100] || "#FFF"}`,
  backgroundColor: theme.colors?.secondary?.[100] || "#000",
}));

export const Frame = styled.div(({ theme }) => ({
  padding: "6px",
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  border: `4px solid #AA4F18`,
}));
