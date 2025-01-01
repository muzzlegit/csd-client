import { ColorsBar } from "modules/terminals/components/ColorsBar/ColorsBar";
import { QueryItem } from "modules/terminals/components/QueryItem/QueryItem";
import { SearchBar } from "modules/terminals/components/SearchBar/SearchBar";
import { TerminalsList } from "modules/terminals/components/TerminalsList/TerminalsList";
import { Container } from "./Terminals.styled";

export const Terminals = () => {
  return (
    <Container>
      <QueryItem />
      <SearchBar />
      <TerminalsList />
      <ColorsBar />
    </Container>
  );
};
