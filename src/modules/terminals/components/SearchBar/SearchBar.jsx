import { TextInput } from "shared/ui";
import { Container, InputStyles, Message, Title } from "./SearchBar.styled";
import useSearchBar from "./useSearchBar";

export const SearchBar = () => {
  const { query, message, handleQuery } = useSearchBar();

  return (
    <Container>
      <Title>Пошук по артиклу</Title>
      <TextInput
        value={query}
        handleInputValue={handleQuery}
        styles={InputStyles}
        placeholder="...артикул"
      />
      <Message>{message}</Message>
    </Container>
  );
};
