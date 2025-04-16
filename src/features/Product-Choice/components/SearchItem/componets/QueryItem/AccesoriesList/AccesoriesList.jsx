import { copyToClipboard } from "shared/helpers";
import { useSearchItemStore } from "../../../store";
import { Container, Item } from "./AccesoriesList.styled";

export const AccesoriesList = () => {
  const item = useSearchItemStore((state) => state.item);
  if (!item || !item?.accesories?.length) return null;

  return (
    <Container>
      {item.accesories.map(({ remote_id, article, description }) => {
        return (
          <Item
            title="Скопіювати артикул"
            key={remote_id}
            onClick={() => {
              copyToClipboard(article);
            }}
          >
            {description}
          </Item>
        );
      })}
    </Container>
  );
};
