import { Acent, Container, Title } from "./SearchItem.styled";
import { QueryItem } from "./atoms/QueryItem/QueryItem";
import SearchBar from "./atoms/SearchBar/SearchBar";

export const SearchItem = () => {
  return (
    <Container>
      <Title>
        Пошук у базі <Acent>Vector VS</Acent>
      </Title>
      <SearchBar />
      <QueryItem />
    </Container>
  );
};
