import { Filter } from "../../Layouts/Filter/Filter";
import { useFilter } from "../../Layouts/Filter/useFilter";
import { Container, Item, List } from "./SwitchesSelector.styled";
import { useSwitchesSelector } from "./useSwitchesSelector";

export const SwitchesSelector = () => {
  const { activeFilter, handleFilterValueClick } = useFilter();
  const { filters, list, handleFetchItemByArticle } =
    useSwitchesSelector(activeFilter);

  console.log(list);
  return (
    <Container>
      <Filter
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
