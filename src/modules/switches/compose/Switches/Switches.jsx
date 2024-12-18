import AccessoriesList from "modules/switches/components/AccessoriesList/AccessoriesList";
import AnaloguesList from "modules/switches/components/AnaloguesList/AnaloguesList";
import FiltersBox from "modules/switches/components/FiltersBox/FiltersBox";
import ImagesContainer from "modules/switches/components/ImagesContainer/ImagesContainer";
import ItemsList from "modules/switches/components/ItemsList/ItemsList";
import QueryItem from "modules/switches/components/QueryItem/QueryItem";
import SearchBar from "modules/switches/components/SearchBar/SearchBar";
import { Column, Container } from "./Switches.styled";

function Switches() {
  return (
    <Container>
      <Column>
        <ImagesContainer />
        <AnaloguesList />
      </Column>
      <Column>
        <SearchBar />
        <QueryItem />
        <AccessoriesList />
      </Column>
      <Column>
        <FiltersBox />
        <ItemsList />
      </Column>
    </Container>
  );
}

export default Switches;
