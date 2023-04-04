export default function getItemFromBaseByKey( items, key ) {
    const itemsList  = items.filter( item => item[ key ] === key );
    
    return itemsList ?? [];
  };