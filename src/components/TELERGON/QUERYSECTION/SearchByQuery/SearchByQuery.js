import { useState } from 'react';
//COMPONENTS
import SearchBar from '../SearchBar/SearchBar';
import QueryItem from '../QueryItem/QueryItem';
//STYLES
import { SearchContainer } from './SearchByQuery.styled';

export default function SearchByQuery() {
  const [query, setQuery] = useState({});
  return (
    <SearchContainer>
      <SearchBar
        setQuery={setQuery}
      />
      <QueryItem
        item={query}
      />
    </SearchContainer>
  )
}


