import { Container, Dummy, Item, List } from "./TerminalsList.styled";
import { useTerminalsList } from "./useTerminalsList";

export const TerminalsList = () => {
  const { filteredList, handleItemClick } = useTerminalsList();

  return (
    <Container>
      {
        <List>
          {filteredList.length ? (
            filteredList.map((terminal) => (
              <Item
                key={terminal.article}
                onClick={() => {
                  handleItemClick(terminal.article);
                }}
              >
                <p>
                  {terminal.description ?? terminal.article + "  Немає опису"}
                </p>
              </Item>
            ))
          ) : (
            <Dummy>Нічого не знайдено</Dummy>
          )}
        </List>
      }
    </Container>
  );
};
