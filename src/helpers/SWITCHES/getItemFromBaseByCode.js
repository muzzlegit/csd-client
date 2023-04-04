//DATA
import VECTOR from '../../data/vector.json';

export default function getItemFromBaseByCode ( code ) {
    const [ item ]  = VECTOR.filter( item => item.code === code );
    
    return item ?? {};
  };