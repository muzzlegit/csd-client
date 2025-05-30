import { technoelectric, telergon } from "features/Product-Choice/data";
import { FilterScheme } from "features/Product-Choice/types/types";
import { Selector } from "../../Layouts/Selector/Selector";
import { Container } from "./SwitchDisconnectorsSelector.styled";

const filterScheme: FilterScheme = {
  current: { title: "Струм", unit: "A", values: [] },
  pole: { title: "Кількість полюсів", unit: null, values: [] },
};

export const SwitchDisconnectorsSelector = () => {
  return (
    <Container>
      <Selector
        manufacturers={[telergon, technoelectric]}
        productKey="switchDisconnectors"
        filterScheme={filterScheme}
      />
    </Container>
  );
};
