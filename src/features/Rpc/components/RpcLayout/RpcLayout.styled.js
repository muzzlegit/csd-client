import styled from "@emotion/styled";

export const Container = styled.div(({ theme }) => ({
  padding: "12px",
  minWidth: "860px",
  height: "fit-content",
  borderRadius: "16px",
  backgroundColor: theme.colors.secondary[100],
}));

export const Wrap = styled.div({
  marginBottom: "6px",
  display: "flex",
  justifyContent: "space-between",
});

export const Content = styled.div({
  display: "flex",
  justifyContent: "space-between",
  gap: "8px",
});
export const Img = styled.img(({ theme }) => ({
  marginLeft: "60px",
  height: "100px",
  objectFit: "contain",
  filter: `drop-shadow(0px 2px 2px ${theme.colors.acent[60]})`,
}));

export const LinkWrap = styled.div(({ theme }) => ({
  padding: "8px 10px",
  height: "fit-content",
  borderRadius: "8px",
  backgroundColor: theme.colors.primary[100],
}));

export const ColWrap = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  gap: "8px",
});
