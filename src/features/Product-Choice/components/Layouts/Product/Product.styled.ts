import styled from "@emotion/styled";

export const Container = styled.div(({ theme }) => ({
  padding: "16px",
  borderRadius: "8px",
  border: `1px solid ${theme.colors.textIdle[20]}`,
  backgroundColor: theme.colors.primary[100],
}));

export const ImageWrap = styled.div(({ theme }) => ({
  width: "300px",
  height: "100%",
  backgroundColor: theme.colors.white[100],
}));

export const Description = styled.p(({ theme }) => ({
  fontSize: "16px",
  color: theme.colors.text[100],
}));

type OnStockProps = {
  isOnStock?: boolean;
};

export const OnStock = styled.span<OnStockProps>(({ theme, isOnStock }) => ({
  width: "14px",
  height: "14px",
  display: "inline-block",
  borderRadius: "50%",
  boxShadow: ` 0 0 3px 1px black`,
  backgroundColor: isOnStock ? theme.colors.green[100] : theme.colors.red[100],
}));
