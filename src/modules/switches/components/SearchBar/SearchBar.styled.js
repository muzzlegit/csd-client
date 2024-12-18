import styled from "@emotion/styled";
import { theme } from "styles/theme";

export const InputStyles = {
  margin: "12px auto",
  width: "90%",
  display: "block",
  textAlign: "center",
  border: "none",
  borderRadius: "8px",
  fontSize: "20px",
  color: theme.colors.text[100],
  backgroundColor: theme.colors.primary[100],
  "::placeholder": {
    color: theme.colors.textIdle[100],
  },
};

export const Message = styled.p(({ theme }) => ({
  minHeight: "16px",
  textAlign: "center",
  fontSize: "14px",
  color: theme.colors.red[100],
}));
