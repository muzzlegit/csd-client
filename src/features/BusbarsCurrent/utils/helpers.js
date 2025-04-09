/**
 * Знаходить струм по габаритам шини
 * @param {number} width
 * @param {number} thickness
 * @param {Object[]} data
 * @returns {Object|null} current
 */

export const getBusbarCurrentBySize = (width, thickness, data) => {
  if (!Array.isArray(data) || !width || !thickness) return null;

  const currentData = data.find(
    (busbar) => busbar.width === width && busbar.thickness === thickness
  );

  return currentData ? currentData?.current : null;
};
