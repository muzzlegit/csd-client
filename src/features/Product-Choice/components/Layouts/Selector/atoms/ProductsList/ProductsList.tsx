import { ProductListType } from "features/Product-Choice/types/types";
import { CopyButton } from "shared/ui/components/CopyButton/CopyButton";
import { FlexWrap } from "styles/theme/global.styled";
import {
  Acent,
  ClicableWrap,
  Item,
  List,
  OnStock,
} from "./ProductsList.styled";
type ProductsListProps = {
  list: ProductListType;
  onItemClick: (article: string) => void;
};

export const ProductsList = ({ list, onItemClick }: ProductsListProps) => {
  return (
    <List>
      {list.length === 0 && <Item>Варіантів не знайдено</Item>}
      {list.map(({ article, description, manufacturer, balance }) => (
        <Item key={article}>
          <FlexWrap alignItems="center" justifyContent="space-between">
            <FlexWrap alignItems="center" gap="8px">
              <ClicableWrap
                onClick={() => {
                  onItemClick(article);
                }}
              >
                {description}
              </ClicableWrap>
              <Acent isUppercase={true} acent="textIdle">
                {manufacturer}
              </Acent>
            </FlexWrap>
            <FlexWrap alignItems="center" gap="16px">
              <FlexWrap alignItems="center" gap="8px">
                {article}
                <CopyButton
                  value={article}
                  size="20px"
                  title="Скопіювати артикул"
                />
              </FlexWrap>
              {balance ? (
                <OnStock
                  isOnStock={balance === "в наявності"}
                  title={balance}
                />
              ) : null}
            </FlexWrap>
          </FlexWrap>
        </Item>
      ))}
    </List>
  );
};
