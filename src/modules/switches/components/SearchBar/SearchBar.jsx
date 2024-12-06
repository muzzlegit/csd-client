import { TextInput } from "shared/ui";
import Layout from "../Layout/Layout";
import { InputStyles, Message } from "./SearchBar.styled";
import useSearchBar from "./useSearchBar";

const SearchBar = () => {
  const { query, message, handleQuery } = useSearchBar();

  return (
    <Layout title="Пошук по артикулу">
      <>
        <TextInput
          value={query}
          handleInputValue={handleQuery}
          styles={InputStyles}
          placeholder="...артикул"
        />
        <Message>{message}</Message>
      </>
    </Layout>
  );
};

export default SearchBar;
