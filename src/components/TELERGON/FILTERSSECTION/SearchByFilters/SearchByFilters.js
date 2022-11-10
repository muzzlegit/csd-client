import { useState } from 'react';
import ItemsList from '../../FILTERSSECTION/ItemsList/ItemsList';
//COMPONENTS
import FiltersBox from '../FiltersBox/FiltersBox';
//STYLES
import {FiltersContainer} from './SearchByFilters.styled';


export default function SearchByFilters(){
  const [elements, setElements] = useState([]);

  return(
    <FiltersContainer>
      <FiltersBox
        setElements={setElements}
      />
    <ItemsList
      itemsList={elements}
    />
    </FiltersContainer>
  )
}