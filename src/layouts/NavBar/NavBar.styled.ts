import styled from "@emotion/styled";

export const Container = styled.nav({
  height: "fit-content",
  display: "flex",
  alignItems: "center",
  justifyContent: "start",
  gap: "16px",
});

type ItemProps = {
  isActive: boolean;
};

export const Item = styled.div<ItemProps>(({ theme, isActive }) => ({
  width: "50px",
  height: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  cursor: "pointer",
  color: isActive ? theme.colors.text[100] : theme.colors.textIdle[100],
  backgroundColor: isActive ? theme.colors.acent[100] : theme.colors.white[20],
  transition:
    "box-shadow 250ms ease-in-out, background-color 250ms ease-in-out, color 250ms ease-in-out",
  ":hover": {
    boxShadow: `0px 0px 8px ${theme.colors.acent[100]}`,
    color: isActive ? theme.colors.text[100] : theme.colors.acent[100],
  },
}));
