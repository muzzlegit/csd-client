import styled from "@emotion/styled";

export const Container = styled.nav({
  height: "fit-content",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "start",
  gap: "16px",
});

export const Item = styled.div(({ theme, isActive }) => ({
  width: "60px",
  height: "60px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  cursor: "pointer",
  ":hover": {
    boxShadow: `0px 0px 8px ${theme.colors.acent[100]}`,
    color: theme.colors?.acent?.[100],
  },
  color: theme.colors?.textIdle?.[100],
  ...(isActive
    ? {
        backgroundColor: theme.colors.acent[100],
        color: theme.colors?.text?.[100],
        ":hover": {
          color: theme.colors?.text?.[100],
        },
      }
    : { backgroundColor: theme.colors.white[20] }),
  transition:
    "box-shadow 250ms ease-in-out, background-color 250ms ease-in-out, color 250ms ease-in-out",
}));
