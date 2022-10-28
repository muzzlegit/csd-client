import { useState } from 'react';
//COMPONENTS
import SearchBar from '../SearchBar/SearchBar';
import FiltersBox from '../FiltersBox/FiltersBox';
import ItemsList from '../ItemsList/ItemsList';
//STYLES
import { Container, SearchBarContainer, FiltersContainer } from './Telergon.styled';

export default function Telergon() {
  const [query, setQuery] = useState([]);
  const [elements, setElements] = useState([]);

  return(
    <Container>
      <SearchBarContainer>
        <SearchBar
          setQuery={setQuery}
        />
        <ItemsList
          itemsList={query}
        />
      </SearchBarContainer>
      <FiltersContainer>
        <FiltersBox
          setElements={setElements}
        />
        <ItemsList
          itemsList={elements}
        />
      </FiltersContainer>
    </Container>
  )
}