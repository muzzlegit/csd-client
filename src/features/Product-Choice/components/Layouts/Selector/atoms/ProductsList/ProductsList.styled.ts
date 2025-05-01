import styled from "@emotion/styled";
import { theme } from "styles/theme";

export const List = styled.div(({ theme }) => ({
  marginTop: "24px",
  padding: "8px 16px 8px 8px",
  height: "300px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  borderRadius: "8px",
  border: `1px solid ${theme.colors.textIdle[10]}`,
  overflowY: "auto",
  scrollBehavior: "smooth",
  scrollbarWidth: "thin",
  "::-webkit-scrollbar": {
    width: "2px",
  },
}));

export const Item = styled.div(({ theme }) => ({
  padding: "6px",
  fontSize: "16px",
  color: theme.colors.text[100],
}));

export const ClicableWrap = styled.div({
  cursor: "pointer",
  "&:hover": {
    color: theme.colors.acent[100],
  },
  transition: "all 250ms ease-in-out",
});

type AcentProps = {
  acent: keyof typeof theme.colors;
  isUppercase?: boolean;
};

export const Acent = styled.span<AcentProps>(
  ({ theme, acent, isUppercase }) => ({
    color: theme.colors[acent][70],
    textTransform: isUppercase ? "uppercase" : "none",
  })
);

type OnStockProps = {
  isOnStock?: boolean;
};

export const OnStock = styled.span<OnStockProps>(({ theme, isOnStock }) => ({
  width: "8px",
  height: "8px",
  borderRadius: "50%",
  backgroundColor: isOnStock ? theme.colors.green[100] : theme.colors.red[100],
}));
