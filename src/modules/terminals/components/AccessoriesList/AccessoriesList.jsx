import { CellLayout } from "shared/ui/components/CellLayout/CellLayout";
import { ItemsList } from "shared/ui/components/ItemsList/ItemsList";
import { List } from "./AccessoriesList.styled";
import { AccessoryItem } from "./AccessoryItem";
import { useAccessoriesList } from "./useAccessoriesList";

export const AccessoriesList = () => {
  const { accessories, handleAccessorySelect } = useAccessoriesList();

  return (
    <CellLayout title="Аксесуари">
      <ItemsList items={accessories} wrapper={List}>
        {(item) => (
          <AccessoryItem
            key={item.id}
            item={item}
            onItemClick={handleAccessorySelect}
          />
        )}
      </ItemsList>
    </CellLayout>
  );
};
