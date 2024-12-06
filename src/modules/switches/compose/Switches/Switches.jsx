//COMPONENTS
import AccessoriesList from "modules/switches/components/AccessoriesList/AccessoriesList";
import FiltersBox from "modules/switches/components/FiltersBox/FiltersBox";
import QueryItem from "modules/switches/components/QueryItem/QueryItem";
import SearchBar from "modules/switches/components/SearchBar/SearchBar";
import { Cell, Container } from "./Switches.styled";

function Switches() {
  return (
    <Container>
      <Cell area="a"></Cell>
      <Cell area="b">
        <SearchBar />
      </Cell>
      <Cell area="c">
        <FiltersBox />
      </Cell>
      <Cell area="d"></Cell>
      <Cell area="e">
        <QueryItem />
      </Cell>
      <Cell area="f"></Cell>
      <Cell area="g"></Cell>
      <Cell area="h">
        <AccessoriesList />
      </Cell>
      <Cell area="i"></Cell>
    </Container>
  );
}

export default Switches;
