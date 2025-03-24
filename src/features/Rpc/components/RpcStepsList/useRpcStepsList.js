import useRpcStore from "features/Rpc/store";
import capacitors from "../../data/capacitorsData.json";
import fusesData from "../../data/fusesData.json";

const options = [
  { label: 0, value: 0 },
  ...Object.values(capacitors)
    .sort((a, b) => a.power - b.power)
    .map((capacitor) => ({
      label: capacitor.power,
      value: capacitor.power,
    })),
];

const useRpcStepsList = () => {
  const steps = useRpcStore((state) => state.steps);
  const setStep = useRpcStore((state) => state.setStep);
  const capacitorsCoefficient = useRpcStore(
    (state) => state.capacitorsCoefficient
  );

  const handleStep = (index, power) => {
    if (power === "0") {
      setStep(index, null);
      return;
    }
    const capacitor = capacitors?.[power];
    const fuse = fusesData.find(
      (fuse) => fuse.current >= capacitor.current * capacitorsCoefficient
    );
    setStep(index, { ...capacitor, fuse });
  };

  return { steps, options, handleStep };
};

export default useRpcStepsList;
