import BASE from "../../data/vector.json";

export const getInitialSwitchesList = () => {
  if (!BASE || typeof BASE !== "object") {
    console.error("Не вдалося завантажити дані");
    return [];
  }
  const list = [];
  Object.values(BASE).forEach((items) => list.push(...items));
  return list;
};
