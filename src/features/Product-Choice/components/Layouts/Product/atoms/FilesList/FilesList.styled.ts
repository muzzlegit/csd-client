import styled from "@emotion/styled";

export const Container = styled.div({
  display: "flex",
  maxHeight: "300px",
  flexDirection: "column",
  gap: "10px",
  overflowY: "auto",
  scrollBehavior: "smooth",
  scrollbarWidth: "thin",
  "::-webkit-scrollbar": {
    width: "2px",
  },
});

export const SectionTitle = styled.p(({ theme }) => ({
  marginBottom: "8px",
  fontWeight: 700,
  color: theme.colors.text[100],
}));

export const FileLink = styled.a(({ theme }) => ({
  textDecoration: "none",
  color: theme.colors.textIdle[100],
  transition: "color 250ms ease",
  "&:hover": {
    color: theme.colors.acent[100],
  },
}));
