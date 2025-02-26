import { useTerminal } from "modules/terminals/hooks/useTerminal";
import { Icon } from "./TerminalScheme.styled";

export const TerminalScheme = () => {
  const { terminal } = useTerminal();

  if (!terminal?.scheme) return null;

  return (
    <Icon>
      <use href={`#${terminal.scheme}`} />
    </Icon>
  );
};
