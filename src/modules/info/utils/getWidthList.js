import data from "../../copper.json";

export const getWidthList = () => {
  const list = data.reduce((acc, busbar) => {
    if (!acc.includes(busbar.width)) {
      acc.push(busbar.width);
    }
    return acc;
  }, []);
  list.sort((a, b) => a - b).unshift("всі");

  return list;
};
