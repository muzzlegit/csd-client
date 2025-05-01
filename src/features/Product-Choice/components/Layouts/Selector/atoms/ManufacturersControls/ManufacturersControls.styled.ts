import styled from "@emotion/styled";

export const Container = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  gap: "24px",
});

export const ManufacturerContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "16px",
});

type LogoBoxProps = {
  isActive: boolean;
};

export const LogoBox = styled.div<LogoBoxProps>(({ theme, isActive }) => ({
  padding: "12px",
  borderRadius: "10px",
  cursor: "pointer",
  backgroundColor: isActive ? theme.colors.acent[60] : "transparent",
  transition: "all 0.2s ease-in-out",
}));

type LogoProps = {
  width?: string;
  height?: string;
  logoColor?: string;
};

export const Logo = styled.img<LogoProps>(
  ({ theme, width, height, logoColor }) => ({
    padding: "4px",
    display: "block",
    height,
    width,
    objectFit: "contain",
    borderRadius: "8px",
    cursor: "pointer",
    backgroundColor: logoColor,
    filter: `drop-shadow(1px 3px 4px ${theme.colors.black[100]})`,
  })
);

export const SeriesContainer = styled.div({
  display: "flex",
  alignItems: "center",
  gap: "16px",
});

type SeriesProps = {
  isActive?: boolean;
};

export const Series = styled.div<SeriesProps>(({ theme, isActive }) => ({
  padding: "2px 8px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "6px",
  borderRadius: "6px",
  cursor: "pointer",
  backgroundColor: isActive ? theme.colors.acent[60] : "transparent",
  transition: "all 0.2s ease-in-out",
}));

export const SeriesTitle = styled.div(({ theme }) => ({
  fontSize: "14px",
  color: theme.colors.text[100],
}));
