//COMPONENTS
import CopyButton from "../../FILTERSSECTION/CopyButton/CopyButton";
//STYLES
import { QueryItemBox, Item } from "./QueryItem.styled";

export default function QueryItem({ searchedItem }) {
  const { code, description, size } = searchedItem;

  return (
    <QueryItemBox>
      <Item>
        {code} {description}
        {`, Розмір ${size}`}
        <CopyButton itemIndex={code} />
      </Item>
    </QueryItemBox>
  );
}
