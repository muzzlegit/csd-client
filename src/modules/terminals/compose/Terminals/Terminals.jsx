import { ColorsBar } from "modules/terminals/components/ColorsBar/ColorsBar";
import { TerminalsList } from "modules/terminals/components/TerminalsList/TerminalsList";
import { Container } from "./Terminals.styled";

export const Terminals = () => {
  return (
    <Container>
      <TerminalsList />
      <ColorsBar />
    </Container>
  );
};
