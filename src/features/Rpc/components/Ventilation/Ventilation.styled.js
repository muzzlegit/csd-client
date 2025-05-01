import styled from "@emotion/styled";

export const Container = styled.div(({ theme }) => ({
  padding: "8px",
  height: "fit-content",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "4px",
  borderRadius: "8px",
  backgroundColor: theme.colors.primary[100],
}));

export const Value = styled.span(({ theme }) => ({
  fontWeight: 700,
  color: theme.colors.acent[80],
}));

export const Title = styled.span(({ theme }) => ({
  fontSize: "14px",
  color: theme.colors.text[80],
}));

export const Wrap = styled.div(({ theme }) => ({
  padding: "4px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "4px",
  borderRadius: "8px",
  border: `1px solid ${theme.colors.textIdle[30]}`,
}));

export const InputStyles = (theme) => {
  return {
    width: "60px",
    display: "block",
    textAlign: "center",
    border: "none",
    borderRadius: "8px",
    fontSize: "14px",
    color: theme.colors.text[100],
    backgroundColor: theme.colors.text[20],
    "::placeholder": {
      color: theme.colors.textIdle[100],
    },
  };
};
