import styled from "@emotion/styled";

export const Container = styled.div(({ theme }) => ({
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  backgroundColor: theme.colors.primary[100],
}));

export const Module = styled.main({
  padding: "8px",
  minHeight: "calc(100%-102px)",
  width: "100%",
  flex: 1,
});
