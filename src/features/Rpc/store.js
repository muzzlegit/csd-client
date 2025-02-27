import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const steps = Array(14).fill(null);

const useRpcStore = create(
  devtools(
    persist(
      immer((set, get) => ({
        steps,
        getSteps: () => get().steps,
        setStep: (index, step) =>
          set((state) => {
            const newSteps = [...state.data];
            newSteps[index] = step;
            return { steps: newSteps };
          }),
        clearSteps: () => set({ steps }),
      })),
      {
        name: "rpcStore",
        // partialize: (state) => ({ favorite: state.favorite }),
      }
    )
  )
);

export default useRpcStore;
