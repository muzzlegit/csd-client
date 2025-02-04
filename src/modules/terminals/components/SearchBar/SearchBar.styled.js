import styled from "@emotion/styled";
import { theme } from "styles/theme";

export const Container = styled.div({
  height: "fit-content",
});

export const Title = styled.p(({ theme }) => ({
  textAlign: "center",
  fontSize: "12px",
  color: theme.colors.text[100],
}));

export const InputStyles = {
  margin: "8px auto",
  width: "90%",
  display: "block",
  textAlign: "center",
  border: "none",
  borderRadius: "8px",
  fontSize: "18px",
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
