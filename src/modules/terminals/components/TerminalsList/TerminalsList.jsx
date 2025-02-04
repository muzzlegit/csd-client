import { useTerminal } from "modules/terminals/hooks/useTerminal";
import { CellLayout } from "shared/ui/components/CellLayout/CellLayout";
import { DeleteFavorite } from "../Favorite/DeleteFavorite/DeleteFavorite";
import { Tabs } from "../Tabs/Tabs";
import { Description, Dummy, Item, List } from "./TerminalsList.styled";
import { useTerminalsList } from "./useTerminalsList";

export const TerminalsList = () => {
  const { filteredList, favoriteList, handleItemClick } = useTerminalsList();
  const { terminal: activeTerminal } = useTerminal();

  const getList = (list, key) => {
    if (!list || !list.length) return <Dummy>Empty</Dummy>;

    return (
      <List>
        {list.map((terminal) => (
          <Item key={terminal.article}>
            <Description
              isActive={activeTerminal?.article === terminal.article}
              onClick={() => {
                handleItemClick(terminal.article);
              }}
            >
              {terminal.description ?? terminal.article + "  Немає опису"}
            </Description>
            {key === "favorite" ? (
              <DeleteFavorite article={terminal.article} />
            ) : (
              <></>
            )}
          </Item>
        ))}
      </List>
    );
  };

  const contentLists = {
    common: getList(filteredList),
    favorite: getList(favoriteList, "favorite"),
    temporary: getList(),
  };

  return (
    <CellLayout title="Клеми">
      <Tabs contentLists={contentLists} />
    </CellLayout>
  );
};
