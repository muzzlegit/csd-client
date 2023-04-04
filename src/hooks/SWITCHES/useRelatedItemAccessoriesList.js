//STORE
import useSwitchesStore from "../../data/STORE/useSwitchesStore";
//HELPERS
import getItemFromBaseByCode from "../../helpers/SWITCHES/getItemFromBaseByCode";

export default function useRelatedItemAccessoriesList() {
  const setItem = useSwitchesStore((state) => state.setItem);
  const selectedRelatedItem = useSwitchesStore(
    (state) => state.selectedRelatedItem
  );
  const setSelectedRelatedItem = useSwitchesStore(
    (state) => state.setSelectedRelatedItem
  );

  const onItemClick = (e) => {
    if (e.target.nodeName !== "LI") return;
    setItem(getItemFromBaseByCode(e.target.id));
    // if( e.target.id !== selectedRelatedItem.code )
    // {
    //   setSelectedRelatedItem( getItemFromBaseByCode( e.target.id ) )
    // }
    // else
    // {
    //   setSelectedRelatedItem({})
    // }
  };

  return onItemClick;
}
