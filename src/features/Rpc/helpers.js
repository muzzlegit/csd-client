import fusesData from "./data/fusesData.json";

export const getFuseByCurrent = (current) => {
  return fusesData.find((fuse) => fuse.current >= current) || 0;
};
