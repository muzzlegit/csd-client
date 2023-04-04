//STORE
import useSwitchesStore from '../../data/STORE/useSwitchesStore';

export default function useSelectorOptionsList( selectorOption ) {
  const itemsList = useSwitchesStore( ( state ) => state.itemsList );

  const optionsList = itemsList.reduce(( acc, item ) => {
    if ( !acc.includes( item[ selectorOption ]) ) acc.push( item[ selectorOption ] );
    return acc;
  }, []);
  return optionsList;
}