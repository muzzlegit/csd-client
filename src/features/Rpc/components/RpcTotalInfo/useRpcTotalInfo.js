import { getFuseByCurrent, getRpcSchema } from "features/Rpc/helpers";
import useRpcStore from "features/Rpc/store";

const useRpcTotalInfo = () => {
  const steps = useRpcStore((state) => state.steps);
  const mainSwitchCoefficient = useRpcStore(
    (state) => state.mainSwitchCoefficient
  );

  const {
    totalPower,
    stepsAmount,
    stepsPowers,
    totalCurrent,
    capacitors,
    contactors,
    fuses,
    fuseholders,
  } = steps.reduce(
    (acc, step) => {
      if (!step) return acc;
      const {
        power = 0,
        current = 0,
        contactor = 0,
        multiplier = 1,
        fuse = {},
      } = step;
      const { size, current: fuseCurrent } = fuse;
      const oneCapacitorPower = power > 50 ? 50 : power;

      acc.totalPower += power;
      acc.totalCurrent += current;

      acc.stepsPowers[power] = (acc.stepsPowers[power] || 0) + 1;

      acc.capacitors[oneCapacitorPower] = !acc.capacitors[oneCapacitorPower]
        ? 1 * multiplier
        : acc.capacitors[oneCapacitorPower] + 1 * multiplier;

      acc.contactors[contactor] = !acc.contactors[contactor]
        ? 1 * multiplier
        : acc.contactors[contactor] + 1 * multiplier;

      acc.fuses[fuseCurrent] = !acc.fuses[fuseCurrent]
        ? 1 * multiplier * 3
        : acc.fuses[fuseCurrent] + 1 * multiplier * 3;

      acc.fuseholders[size] = !acc.fuseholders[size]
        ? 1 * multiplier
        : acc.fuseholders[size] + 1 * multiplier;

      acc.stepsAmount += 1;
      return acc;
    },
    {
      totalPower: 0,
      stepsAmount: 0,
      totalCurrent: 0,
      stepsPowers: {},
      capacitors: {},
      contactors: {},
      fuses: {},
      fuseholders: {},
    }
  );

  const rpcSchema = getRpcSchema(stepsPowers, totalPower);

  const mainSwitchCurrent =
    getFuseByCurrent(totalCurrent * mainSwitchCoefficient)?.current ?? 0;

  return {
    totalPower,
    stepsAmount,
    mainSwitchCurrent,
    capacitors,
    contactors,
    fuses,
    fuseholders,
    rpcSchema,
  };
};

export default useRpcTotalInfo;
