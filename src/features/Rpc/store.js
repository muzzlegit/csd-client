import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const steps = Array.from({ length: 14 }, () => null);

const useRpcStore = create(
  devtools(
    persist(
      immer((set, get) => ({
        steps: steps,
        mainSwitchCoefficient: 1.6,
        capacitorsCoefficient: 1.6,
        getSteps: () => get().steps,
        setStep: (index, step) =>
          set((state) => {
            const newSteps = [...state.steps];
            newSteps[index] = step;
            return { steps: newSteps };
          }),
        clearSteps: () =>
          set({
            steps,
            mainSwitchCoefficient: 1.6,
            capacitorsCoefficient: 1.6,
          }),
        clearRpc: () => set({ steps }),
        increaseCapacitorsCoefficient: () =>
          set((state) => ({
            capacitorsCoefficient:
              Math.round(Math.min(state.capacitorsCoefficient + 0.1, 2) * 10) /
              10,
          })),
        decreaseCapacitorsCoefficient: () =>
          set((state) => ({
            capacitorsCoefficient:
              Math.round(
                Math.max(state.capacitorsCoefficient - 0.1, 1.2) * 10
              ) / 10,
          })),
        increaseMainSwitchCoefficient: () =>
          set((state) => ({
            mainSwitchCoefficient:
              Math.round(Math.min(state.mainSwitchCoefficient + 0.1, 2) * 10) /
              10,
          })),
        decreaseMainSwitchCoefficient: () =>
          set((state) => ({
            mainSwitchCoefficient:
              Math.round(
                Math.max(state.mainSwitchCoefficient - 0.1, 1.2) * 10
              ) / 10,
          })),
      })),
      {
        name: "rpcStore",
      }
    ),
    { name: "RPC" }
  )
);

export default useRpcStore;
