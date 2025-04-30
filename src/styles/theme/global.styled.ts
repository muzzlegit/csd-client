import { CSSProperties } from "@emotion/serialize";
import styled from "@emotion/styled";

type FlexWrap = {
  flexDirection?: CSSProperties["flexDirection"];
  alignItems?: CSSProperties["alignItems"];
  justifyContent?: CSSProperties["justifyContent"];
  flexWrap?: CSSProperties["flexWrap"];
  gap?: string;
  margin?: CSSProperties["margin"];
  padding?: CSSProperties["padding"];
};

export const FlexWrap = styled.div<FlexWrap>(
  ({
    flexDirection,
    alignItems,
    justifyContent,
    flexWrap,
    gap,
    margin,
    padding,
  }) => ({
    margin,
    padding,
    display: "flex",
    flexDirection,
    flexWrap,
    alignItems,
    justifyContent,
    gap,
  })
);
