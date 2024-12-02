import data from "../../copper.json";

export const getThicknessList = () => {
  const list = data.reduce((acc, busbar) => {
    if (!acc.includes(busbar.thickness)) {
      acc.push(busbar.thickness);
    }
    return acc;
  }, []);

  list.sort((a, b) => a - b).unshift("всі");
  return list;
};
