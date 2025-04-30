import { Product } from "features/Product-Choice/components/Layouts/Product/Product";
import { useSearchItemStore } from "features/Product-Choice/store/store";
import { Container } from "./QueryItem.styled";

export const QueryItem = () => {
  const item = useSearchItemStore((state) => state.item);
  const itemAccessory = useSearchItemStore((state) => state.itemAccessory);
  if (!item) return null;

  return (
    <Container>
      <Product product={item} />
      {itemAccessory ? <Product product={itemAccessory} /> : null}
    </Container>
  );
};
