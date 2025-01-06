import { ColorsBar } from "modules/terminals/components/ColorsBar/ColorsBar";
import { QueryItem } from "modules/terminals/components/QueryItem/QueryItem";
import { SearchBar } from "modules/terminals/components/SearchBar/SearchBar";
import { TerminalImages } from "modules/terminals/components/TerminalImages/TerminalImages";
import { TerminalsList } from "modules/terminals/components/TerminalsList/TerminalsList";
import { Container } from "./Terminals.styled";

export const Terminals = () => {
  return (
    <Container>
      <TerminalImages />
      <QueryItem />
      <SearchBar />
      <TerminalsList />
      <ColorsBar />
    </Container>
  );
};
