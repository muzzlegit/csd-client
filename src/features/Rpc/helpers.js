import fusesData from "./data/fusesData.json";

export const getFuseByCurrent = (current) => {
  return fusesData.find((fuse) => fuse.current >= current) || 0;
};

export const getRpcSchema = (steps) => {
  if (!steps) return "";
  let schema = "";
  const powersArray = Object.keys(steps).sort((a, b) => a - b);

  powersArray.forEach((power) => {
    schema += steps[power] > 1 ? `-${steps[power]}x${power}` : `-${power}`;
  });

  return schema.slice(1);
};
