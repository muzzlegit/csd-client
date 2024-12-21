import styled from "@emotion/styled";

export const Container = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});

export const Wrap = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
});

export const Title = styled.p(({ theme }) => ({
  marginBottom: "6px",
  fontSize: "14px",
  fontWeight: 600,
  color: theme?.colors?.text[100],
}));

export const Link = styled.a(({ theme }) => ({
  textDecoration: "none",
  color: theme?.colors?.textIdle[100],
  display: "inline-block",
  "&:hover": {
    color: theme?.colors?.acent[60],
  },
}));
