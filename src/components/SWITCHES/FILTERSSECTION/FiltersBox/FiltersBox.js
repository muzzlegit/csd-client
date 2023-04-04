import { useEffect, useState } from "react";
//DATA
import VECTOR from '../../../../data/vector.json';
//COMPONENTS
import FilterSelector from "../FilterSelector/FilterSelector";
//STYLES
import { FiltersBoxTitle, RelatedFiltersBox, FiltersWrap } from "./FiltersBox.styled";



export default function FiltersBox({setElements}){
  const [sectionFilter, setSectionFilter] = useState('');
  const [sectionElements, setSectionElements] = useState([]);
  const [currentFilter, setCurrentFilter] = useState('');
  const [currentElements, setCurrentElements] = useState([]);
  const [poleFilter, setPoleFilter] = useState('');
  const [poleElements, setPoleElements] = useState([]);

  // useEffect(() => {
  //   const elementsArray =[];
  //   for (const key in TELERGON) {
  //     if(!elementsArray.includes(key))
  //     elementsArray.push(key);
  //   };
  //   setSectionElements(elementsArray);
  // }, [])

  // useEffect(() => {
  //   const array = []
  //   for (const key in TELERGON[sectionFilter]) {
  //     if(!array.includes(TELERGON[sectionFilter][key].current))
  //     array.push(TELERGON[sectionFilter][key].current);
  //   };
  //   setCurrentElements(array)
  // }, [sectionFilter])

  // useEffect(() => {
  //   const array = []
  //   for (const key in TELERGON[sectionFilter]) {
  //     if(!array.includes(TELERGON[sectionFilter][key].pole))
  //     array.push(TELERGON[sectionFilter][key].pole);
  //   };
  //   setPoleElements(array);
  // }, [sectionFilter])

  // useEffect(() => {
  //   const array = []
  //   for (const key in TELERGON[sectionFilter]) {
  //     if( currentFilter === '' && poleFilter === ''){
  //       array.push(TELERGON[sectionFilter][key]);
  //     }
  //     if(currentFilter !== '' && poleFilter === ''){
  //       if(Number(currentFilter) === TELERGON[sectionFilter][key].current) array.push(TELERGON[sectionFilter][key]);
  //     }
  //     if(currentFilter === '' && poleFilter !== ''){
  //       if(Number(poleFilter) === TELERGON[sectionFilter][key].pole) array.push(TELERGON[sectionFilter][key]);
  //     }
  //     if(currentFilter !== '' && poleFilter !== ''){
  //       if(Number(poleFilter) === TELERGON[sectionFilter][key].pole
  //           &&
  //         Number(currentFilter) === TELERGON[sectionFilter][key].current
  //       ) array.push(TELERGON[sectionFilter][key]);
  //     }
  //   };
  //   setElements(array);
  // }, [sectionFilter,currentFilter, poleFilter,setElements])

  return(
    <FiltersWrap>
      <FiltersBoxTitle>Пошук по фільтрам</FiltersBoxTitle>
      <FilterSelector
        filterProperty = { 'section' }
      />
      <RelatedFiltersBox>
        <FilterSelector
          filterProperty = { 'manufacturer' }
        />  
        <FilterSelector
          filterProperty = { 'pole' }
        />
        <FilterSelector
          filterProperty = { 'current' }
        />        
      </RelatedFiltersBox>
    </FiltersWrap>
  )

}