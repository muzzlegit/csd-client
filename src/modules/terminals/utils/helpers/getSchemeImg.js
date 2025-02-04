const images = import.meta.glob(
  "/src/modules/terminals/utils/assets/schemes/*.webp",
  { eager: true }
);

export const getSchemeImage = (schemeNumber) => {
  if (!schemeNumber) return null;

  return images[
    `/src/modules/terminals/utils/assets/schemes/${schemeNumber}.webp`
  ]?.default;
};
