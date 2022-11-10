import { useState, useEffect } from "react";
//DATA
import VECTOR from '../../../../data/vector.json'
//STYLED
import { SearchBarTitle, SearchBarInputBox } from "./SearchBar.styled";

export default function SearchBar({setQuery}) {
  const [value, setValue] = useState('');

  const switches = VECTOR.telergon["Вимикачі навантаження"];

  const onChange = (e) => {
    setValue(e.currentTarget.value);
  }
  
  useEffect(()=>{
    for(let key in switches){
      if(key === value){
        setQuery(switches[key]);
        return;
      } else {
        setQuery({});
      }
    }
    
  }, [value, setQuery, switches]);
  
  return(
    <>
      <SearchBarTitle>Пошук по артикулу</SearchBarTitle>
      <SearchBarInputBox>
        <label>Артикул</label>
        <input
          type="text"
          value={value}
          onChange={onChange}
        />
      </SearchBarInputBox>
    </>
  )
}