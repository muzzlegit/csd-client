import { fetchItemsByCategory } from "lib/apiService";
import SCHEMES_SPRITE from "modules/terminals/utils/assets/schemes/schemes.svg";
import { SvgSprite } from "shared/ui/components/SvgSprite/SvgSprite";
import { AccessoriesList } from "../components/AccessoriesList/AccessoriesList";
import { Accessory } from "../components/Accessory/Accessory";
import { SearchBar } from "../components/SearchBar/SearchBar";
import { Terminal } from "../components/Terminal/Terminal";
import { TerminalImages } from "../components/TerminalImages/TerminalImages";
import { TerminalScheme } from "../components/TerminalScheme/TerminalScheme";
import { TerminalsList } from "../components/TerminalsList/TerminalsList";
import { AccessoryImage } from "../compose/AccessoryImage/AccessoryImage";
import { Cell, Container } from "./Terminals.styled";

export const Terminals = () => {
  return (
    <Container>
      <Cell area="a">
        <TerminalImages />
      </Cell>
      <Cell area="b">
        <SearchBar />
      </Cell>
      <Cell area="c">
        <AccessoryImage />
      </Cell>
      <Cell area="d">
        <Terminal />
      </Cell>
      <Cell area="e">{/* <ColorsBar /> */}</Cell>
      <Cell area="f">
        <Accessory />
      </Cell>
      <Cell area="g">
        <TerminalScheme />
        <SvgSprite spriteURL={SCHEMES_SPRITE} />
      </Cell>
      <Cell area="h">
        <TerminalsList />
      </Cell>
      <Cell area="i">
        <AccessoriesList />
      </Cell>
      <button
        onClick={() => {
          fetchItemsByCategory(848);
        }}
      >
        go
      </button>
    </Container>
  );
};
