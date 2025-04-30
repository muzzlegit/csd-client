import styled from "@emotion/styled";

export const Container = styled.div({
  display: "flex",
  alignItems: "center",
  gap: "8px",
});

type DotTypeProps = {
  isActive: boolean;
};

export const Dot = styled.div<DotTypeProps>(({ theme, isActive }) => ({
  width: "8px",
  height: "8px",
  borderRadius: "50%",
  border: `1px solid ${
    isActive ? theme?.colors?.acent[100] : theme?.colors?.text[100]
  }`,
  backgroundColor: isActive ? theme?.colors?.acent[100] : "none",
}));
