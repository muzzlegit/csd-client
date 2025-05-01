import styled from "@emotion/styled";
import { ThemeType } from "styles/theme/theme";

export const Container = styled.form(({ theme }) => ({
  paddingLeft: "8px",
  width: "70%",
  display: "flex",
  alignItems: "center",
  gap: "8px",
  borderRadius: "30px",
  border: `2px solid ${theme.colors.textIdle[50]}`,
  color: theme.colors.text[100],
  backgroundColor: theme.colors.secondary[100],
}));

export const InputStyles = (theme: ThemeType) => {
  return {
    padding: "12px 20px 12px 10px",
    width: "100%",
    display: "block",
    border: "none",
    fontSize: "18px",
    color: theme.colors.text[100],
    borderTopRightRadius: "30px",
    borderBottomRightRadius: "30px",
    out: `2px solid ${theme.colors.textIdle[100]}`,
    backgroundColor: theme.colors.primary[100],
    "::placeholder": {
      fontSize: 16,
      color: theme.colors.textIdle[100],
    },
    "&:focus": {
      outline: `2px solid ${theme.colors.acent[50]}`,
    },
  };
};

export const Message = styled.p(({ theme }) => ({
  minHeight: "16px",
  textAlign: "center",
  fontSize: "14px",
  color: theme.colors.red[100],
}));
