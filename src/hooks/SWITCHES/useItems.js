import { useEffect } from 'react';
//DATA
import VECTOR from '../../data/vector.json';
//STORE
import useSwitchesStore from '../../data/STORE/useSwitchesStore';


export default function useItems(){
  const setItemsList = useSwitchesStore( ( state ) => state.setItemsList );
  const filters = useSwitchesStore( ( state ) => state.filters );

  useEffect(() => {
    let list = VECTOR;
    for( const key in filters ) {
      if( filters[ key ] !== '')
      list = list.filter( item => item[ key ].toString() === filters[ key ] );
    };
    setItemsList( list );
  }, [ filters, setItemsList ]);

}