import { QueryItem } from "../QueryItem/QueryItem";
import SearchBar from "../SearchBar/SearchBar";
import { Acent, Container, Title } from "./Layout.styled";

export const Layout = () => {
  return (
    <Container>
      <Title>
        Пошук у базі <Acent>VECTOR-VS</Acent>
      </Title>
      <SearchBar />
      <QueryItem />
    </Container>
  );
};
