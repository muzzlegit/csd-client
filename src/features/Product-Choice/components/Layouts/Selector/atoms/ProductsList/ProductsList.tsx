import { ProductListType } from "features/Product-Choice/types/types";
import { Item, List } from "./ProductsList.styled";

type ProductsListProps = {
  list: ProductListType;
  onItemClick: (article: string) => void;
};

export const ProductsList = ({ list, onItemClick }: ProductsListProps) => {
  return (
    <List>
      {list.length === 0 && <Item>Варіантів не знайдено</Item>}
      {list.map(({ article, description }) => (
        <Item
          key={article}
          onClick={() => {
            onItemClick(article);
          }}
        >{`${article} ${description}`}</Item>
      ))}
    </List>
  );
};
