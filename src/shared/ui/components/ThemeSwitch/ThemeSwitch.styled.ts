import styled from "@emotion/styled";

export const Container = styled.div(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "18px",
  backgroundColor: theme.colors.acent[20],
}));

type ButtonBoxProps = {
  isActive?: boolean;
};

export const ButtonBox = styled.div<ButtonBoxProps>(({ theme, isActive }) => ({
  width: "36px",
  height: "36px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  cursor: isActive ? "default" : "pointer",
  backgroundColor: isActive ? theme.colors.acent[100] : "transparent",
  color: isActive ? theme.colors.secondary[100] : theme.colors.text[100],
  "&:hover": {
    color: isActive ? theme.colors.secondary[100] : theme.colors.acent[100],
  },
}));
