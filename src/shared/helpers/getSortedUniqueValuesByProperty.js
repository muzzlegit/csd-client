/**
 * Генерує список значень по властивості
 * @param {'thickness'|'width'} property
 * @param {Object[]} data
 * @returns {number[]} list
 */

export const getSortedUniqueValuesByProperty = (property, data) => {
  if (!Array.isArray(data)) return [];

  const set = new Set(
    data
      .map((busbar) => busbar?.[property])
      .filter((property) => property !== undefined)
  );
  const list = Array.from(set).sort((a, b) => a - b);

  return list;
};
