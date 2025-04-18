import styled from "@emotion/styled";

export const Container = styled.div({
  width: "100%",
});

export const ManufacturersContainer = styled.div(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  gap: "24px",
}));

export const ManufacturerBox = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "16px",
}));

export const LogoBox = styled.div(
  ({ theme, width, height, logoColor, isActive }) => ({
    padding: "4px",
    height,
    width,
    borderRadius: "8px",
    cursor: "pointer",
    backgroundColor: logoColor,
    boxShadow: isActive ? `0 0 10px ${theme.colors.acent[60]}` : "none",
    transition: "all 0.2s ease-in-out",
  })
);

export const Logo = styled.img(({ width, height, logoColor }) => ({
  padding: "4px",
  display: "block",
  height,
  width,
  objectFit: "contain",
  borderRadius: "8px",
  cursor: "pointer",
  backgroundColor: logoColor,
}));

export const Series = styled.div(({ theme, isActive }) => ({
  padding: "2px 8px",
  textAlign: "center",
  borderRadius: "6px",
  cursor: "pointer",
  boxShadow: isActive ? `0 0 10px ${theme.colors.acent[60]}` : "none",
  transition: "all 0.2s ease-in-out",
}));

export const SeriesTitle = styled.div(({ theme }) => ({
  marginBottom: "6px",
  fontSize: "14px",
  color: theme.colors.text[100],
}));

export const SeriesContainer = styled.div(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "16px",
}));

export const ValuesList = styled.div(({ theme }) => ({
  marginTop: "12px",
  display: "flex",
  flexDirection: "column",
  gap: "6px",
  borderRadius: "8px",
  backgroundColor: theme.colors.primary[100],
}));

export const Title = styled.div(({ theme }) => ({
  marginBottom: "8px",
  color: theme.colors.text[100],
}));

export const ValuesBox = styled.div({
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "8px",
});

export const Value = styled.div(({ theme, isActive }) => ({
  padding: "4px 8px",
  borderRadius: "8px",
  fontSize: "16px",
  cursor: isActive ? "default" : "pointer",
  color: isActive ? theme.colors.text[100] : theme.colors.textIdle[100],
  backgroundColor: isActive
    ? theme.colors.acent[60]
    : theme.colors.secondary[100],
  ":hover": {
    boxShadow: isActive ? "none" : `0px 0px 8px ${theme.colors.acent[100]}`,
    color: isActive ? theme.colors.text[100] : theme.colors?.acent?.[100],
  },
  transition:
    "box-shadow 250ms ease-in-out, background-color 250ms ease-in-out, color 250ms ease-in-out",
}));
