import { COLORS } from "../constants";

export const getTerminalColorData = (colorKey) => {
  if (!colorKey) return null;

  const colorData = COLORS[colorKey] || {};

  return {
    label: colorData.label || "Немає даних",
    hex: colorData.color || "#FFF",
    index: colorData.index || null,
  };
};
