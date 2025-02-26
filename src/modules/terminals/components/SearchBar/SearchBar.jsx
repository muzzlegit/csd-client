import { TextInput } from "shared/ui";
import { CellLayout } from "shared/ui/components/CellLayout/CellLayout";
import { Container, InputStyles, Message } from "./SearchBar.styled";
import useSearchBar from "./useSearchBar";

export const SearchBar = () => {
  const {
    query,
    message,
    handleQuery,
    queryByAccessory,
    handleQueryByAccessory,
  } = useSearchBar();

  return (
    <CellLayout title="Пошук по артиклу">
      <Container>
        <TextInput
          value={query}
          handleInputValue={handleQuery}
          styles={InputStyles}
          placeholder="...артикул"
        />
        <Message>{message}</Message>
        <TextInput
          value={queryByAccessory}
          handleInputValue={handleQueryByAccessory}
          styles={InputStyles}
          placeholder="...артикул аксесуару"
        />
      </Container>
    </CellLayout>
  );
};
