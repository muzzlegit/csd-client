//HOOKS
import useInput from "../../../../hooks/SWITCHES/useInput";
//STYLES
import {
  SearchBarBox,
  SearchBarTitle,
  SearchBarInput,
} from "./SearchBar.styled";

export default function SearchBar() {
  const [value, onChange] = useInput();

  return (
    <SearchBarBox>
      <SearchBarTitle>Пошук по артикулу</SearchBarTitle>
      <SearchBarInput>
        <label>Артикул</label>
        <input
          type="text"
          value={value}
          onChange={onChange}
          onSubmit={onChange}
        />
      </SearchBarInput>
    </SearchBarBox>
  );
}
