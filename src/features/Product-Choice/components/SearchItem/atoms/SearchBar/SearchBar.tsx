import { RiSearch2Line } from "react-icons/ri";
import { TextInput } from "shared/ui";
import { useQuery } from "../../useQuery";
import { Container, InputStyles } from "./SearchBar.styled";
const SearchBar = () => {
  const { query, handleQuery, handleFetchProduct } = useQuery();

  return (
    <Container
      onSubmit={(e) => {
        e.preventDefault();
        handleFetchProduct();
      }}
    >
      <RiSearch2Line size="24" />
      <TextInput
        value={query}
        handleInputValue={(e) => {
          handleQuery(e.currentTarget.value);
        }}
        styles={InputStyles}
        placeholder="...артикул"
      />
    </Container>
  );
};

export default SearchBar;
