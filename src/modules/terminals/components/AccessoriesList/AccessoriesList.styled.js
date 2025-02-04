import styled from "@emotion/styled";

export const List = styled.div(({ theme }) => ({
  padding: "8px",
  height: "188px",
  width: "460px",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  borderRadius: "8px",
  overflowY: "auto",
  scrollbarWidth: "thin",
  "&::-webkit-scrollbar": {
    width: "8x",
  },
  fontSize: "14px",
  whiteSpace: "wrap",
  backgroundColor: theme.colors.secondary[100],
}));

export const Wrap = styled.div(({ theme }) => ({
  padding: "6px",
  display: "flex",
  alignItems: "center",
  gap: "8px",
  cursor: "pointer",
  color: theme.colors.textIdle[100],
  "&:hover": {
    color: theme.colors.text[100],
    backgroundColor: theme.colors.white[10],
  },
}));

export const Img = styled.img({
  width: "60px",
});

export const ImageBox = styled.div(({ theme }) => ({
  height: "45px",
  minWidth: "60px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "10px",
  color: theme.colors.textIdle[80],
  backgroundColor: theme.colors.primary[80],
}));
