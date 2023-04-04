import { create } from 'zustand';
//DATA
import VECTOR from '../../data/vector.json';

const useSwitchesStore = create((set) => ({
  item: {},
  selectedRelatedItem: {},
  itemsList: VECTOR ,
  filters: {},


  

  setItem: ( item ) => set((state) => ( state.item = item )),
  setSelectedRelatedItem: ( item ) => set((state) => ( state.selectedRelatedItem = item )),
  setItemsList: ( items ) => set((state) => ( state.itemsList = items )),
  setFilter: ( filter ) => set((state) => ( state.filters = { ...state.filters, ...filter } )),
}));

export default useSwitchesStore;