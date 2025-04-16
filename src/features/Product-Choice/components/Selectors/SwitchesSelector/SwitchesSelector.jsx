import { Selector } from "../../Layouts/Selector/Selector";
import { useFilter } from "../../Layouts/Selector/useFilter";
import { Container, Item, List } from "./SwitchesSelector.styled";
import { useSwitchesSelector } from "./useSwitchesSelector";

export const SwitchesSelector = () => {
  const { activeFilter, handleFilterValueClick } = useFilter();
  const { filters, list, manufacturers, handleFetchItemByArticle } =
    useSwitchesSelector(activeFilter);

  return (
    <Container>
      <Selector
        manufacturers={manufacturers}
        productKey="switchDisconnectors"
        filters={filters}
        activeFilter={activeFilter}
        handleClick={handleFilterValueClick}
      />
      <List>
        {list.map((item) => (
          <Item
            key={item.code}
            onClick={() => {
              handleFetchItemByArticle(item.code);
            }}
          >{`${item.code} ${item.description}`}</Item>
        ))}
      </List>
    </Container>
  );
};
