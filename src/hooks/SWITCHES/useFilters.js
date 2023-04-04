//STORE
import useSwitchesStore from '../../data/STORE/useSwitchesStore';

export default function useFilters( filterProperty ) {
  const setFilter = useSwitchesStore(( state ) => state.setFilter );
  const filters = useSwitchesStore(( state ) => state.filters );
  const onChange = ( e ) => {
    setFilter({[ filterProperty ] : e.currentTarget.value });
    console.log(filters)
  };

  return onChange;
}