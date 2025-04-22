import { technoelectric, telergon } from "features/Product-Choice/data";
import { FilterScheme } from "features/Product-Choice/types/types";
import { Selector } from "../../Layouts/Selector/Selector";

const filterScheme: FilterScheme = {
  current: { title: "Струм", unit: "A", values: [] },
  pole: { title: "Кількість полюсів", unit: null, values: [] },
};

export const ChangeoverSwitchesSelector = () => {
  return (
    <Selector
      manufacturers={[telergon, technoelectric]}
      filterScheme={filterScheme}
      productKey="changeoverSwitches"
    />
  );
};
