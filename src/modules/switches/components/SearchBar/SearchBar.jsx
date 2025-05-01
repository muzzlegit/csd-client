import { TextInput } from "shared/ui";
import { useUserTheme } from "styles/theme/useTheme";
import Layout from "../Layout/Layout";
import { Container, InputStyles, Message } from "./SearchBar.styled";
import useSearchBar from "./useSearchBar";

const SearchBar = () => {
  const { query, message, handleQuery } = useSearchBar();
  const { theme } = useUserTheme();
  return (
    <Layout title="Пошук по артикулу">
      <Container>
        <TextInput
          value={query}
          handleInputValue={handleQuery}
          styles={InputStyles(theme)}
          placeholder="...артикул"
        />
        <Message>{message}</Message>
      </Container>
    </Layout>
  );
};

export default SearchBar;
