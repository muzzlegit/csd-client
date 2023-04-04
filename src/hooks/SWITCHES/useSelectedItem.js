import { useState } from "react";
//HELPERS
import getItemFromBaseByCode from "../../helpers/SWITCHES/getItemFromBaseByCode";

export default function useSelectedItem() {
  const [ selectedItem, setSelectedItem ] = useState({});

  const onItemClick = ( e ) => {
    if( e.target.nodeName !== 'LI' ) return;
    if( e.target.id !== selectedItem.code )
    {
      setSelectedItem( getItemFromBaseByCode( e.target.id ) )
    }
    else
    {
      setSelectedItem({})
    }
  };

  return [ selectedItem, onItemClick ];
}