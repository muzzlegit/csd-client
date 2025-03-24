import styled from "@emotion/styled";

export const Container = styled.div({
  maxHeight: "350px",
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  overflowX: "hidden",
  overflowY: "auto",
  scrollbarWidth: "thin",
  "&::-webkit-scrollbar": {
    width: "8px",
  },
  "@media (max-width: 1720px)": {
    maxHeight: "330px",
  },
});

export const Wrap = styled.div(({ theme }) => ({
  display: "flex",
  alignItems: "baseline",
  gap: "8px",
}));

export const Code = styled.p(({ theme }) => ({
  whiteSpace: "nowrap",
  fontSize: "14px",
  fontWeight: 700,
  color: theme.colors.text[100],
}));

export const Description = styled.p(({ theme }) => ({
  fontSize: "14px",
  color: theme.colors.textIdle[100],
}));
