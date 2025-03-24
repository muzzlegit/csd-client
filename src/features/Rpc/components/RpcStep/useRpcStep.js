import useRpcStore from "features/Rpc/store";
import fusesData from "../../data/fusesData.json";

const useRpcStep = (current) => {
  const capacitorsCoefficient = useRpcStore(
    (state) => state.capacitorsCoefficient
  );
  const fuse = fusesData.find(
    (fuse) => fuse.current >= current * capacitorsCoefficient
  );

  return { fuse };
};

export default useRpcStep;
