import { useSearchItemStore } from "../../../store";
import { Acent, Container, Item } from "./FeaturesList.styled";

export const FeaturesList = () => {
  const item = useSearchItemStore((state) => state.item);
  console.log(item);
  if (!item || !item?.features) return null;

  return (
    <Container>
      {item.features.map(({ title, value, unit }) => {
        const isUtit = unit ? " " + unit : "";
        return (
          <Item key={title}>
            {title + ": "}
            <Acent> {value + isUtit}</Acent>
          </Item>
        );
      })}
    </Container>
  );
};
