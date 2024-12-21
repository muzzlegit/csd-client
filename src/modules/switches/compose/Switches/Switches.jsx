import AccessoriesList from "modules/switches/components/AccessoriesList/AccessoriesList";
import AnaloguesList from "modules/switches/components/AnaloguesList/AnaloguesList";
import FilesList from "modules/switches/components/FilesList/FilesList";
import FiltersBox from "modules/switches/components/FiltersBox/FiltersBox";
import ImagesContainer from "modules/switches/components/ImagesContainer/ImagesContainer";
import ItemsList from "modules/switches/components/ItemsList/ItemsList";
import QueryItem from "modules/switches/components/QueryItem/QueryItem";
import SearchBar from "modules/switches/components/SearchBar/SearchBar";
import { Cell, Container } from "./Switches.styled";

function Switches() {
  return (
    <Container>
      <Cell area="a" height="440px">
        <ImagesContainer />
      </Cell>
      <Cell area="b" height="140px">
        <SearchBar />
      </Cell>
      <Cell area="c" height="140px">
        <FiltersBox />
      </Cell>

      <Cell area="d">
        <FilesList />
      </Cell>
      <Cell area="e" height="240px">
        <QueryItem />
      </Cell>
      <Cell area="f">
        <ItemsList />
      </Cell>

      <Cell area="g">
        <AnaloguesList />
      </Cell>
      <Cell area="h">
        <AccessoriesList />
      </Cell>
      <Cell area="i"></Cell>
    </Container>
  );
}

export default Switches;
