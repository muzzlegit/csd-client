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
  height?: CSSProperties["height"];
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
    height,
  }) => ({
    margin,
    padding,
    height,
    display: "flex",
    flexDirection,
    flexWrap,
    alignItems,
    justifyContent,
    gap,
  })
);
