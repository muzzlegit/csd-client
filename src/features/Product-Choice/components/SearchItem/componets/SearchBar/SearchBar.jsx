import { TextInput } from "shared/ui";
import { useQuery } from "../../useQuery";
import { SearchButton } from "../SearchButton/SearchButton";
import { Container, InputStyles } from "./SearchBar.styled";

const SearchBar = () => {
  const { query, handleQuery, handleFetchItem } = useQuery();

  return (
    <Container>
      <TextInput
        value={query}
        handleInputValue={(e) => {
          handleQuery(e.currentTarget.value);
        }}
        styles={InputStyles}
        placeholder="...артикул"
      />
      <SearchButton handleClick={handleFetchItem} />
    </Container>
  );
};

export default SearchBar;
