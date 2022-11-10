
//COMPONENTS
import SearchByQuery from '../QUERYSECTION/SearchByQuery/SearchByQuery';
import SearchByFilters from '../FILTERSSECTION/SearchByFilters/SearchByFilters';
//STYLES
import { Container} from './Telergon.styled';

export default function Telergon() {
  return(
    <Container>
      <SearchByQuery/>
      <SearchByFilters/>
    </Container>
  )
}