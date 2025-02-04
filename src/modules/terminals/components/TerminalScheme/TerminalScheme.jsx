import { useTerminal } from "modules/terminals/hooks/useTerminal";
import { getSchemeImage } from "modules/terminals/utils/helpers/getSchemeImg";
import { Container } from "./TerminalScheme.styled";

export const TerminalScheme = () => {
  const { terminal } = useTerminal();
  const scheme = getSchemeImage(terminal?.scheme);

  if (!scheme) return null;

  return <Container src={scheme} alt="Схема" />;
};
