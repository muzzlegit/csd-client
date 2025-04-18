import { technoelectric, telergon } from "features/Product-Choice/data";
import { Selector } from "../../Layouts/Selector/Selector";

const filterScheme = {
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
