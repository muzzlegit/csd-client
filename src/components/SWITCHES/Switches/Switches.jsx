//COMPONENTS
import SearchByQuery from "../QUERYSECTION/SearchByQuery/SearchByQuery";
// import SearchByFilters from "../FILTERSSECTION/SearchByFilters/SearchByFilters";
// import SwitchButton from "../SwitchButton/SwitchButton";
//HOOKS
// import useSwitchButton from "../../../hooks/SWITCHES/useSwitchButton";
//STYLES
import { Container } from "./Switches.styled";

export default function Telergon() {
  // const [windowToggle, onWindowToggle] = useSwitchButton(true);

  return (
    <Container>
      <p>На даний момент доступні серії:</p>
      <p>Телергон</p>
      <p>Вимикачі: S5</p>
      <p>Перемикачі: S5F, CCF, CEC, S5L</p>
      <SearchByQuery />
      {/* <SwitchButton windowToggle={onWindowToggle} />
      {windowToggle ? <SearchByQuery /> : <SearchByFilters />} */}
    </Container>
  );
}
