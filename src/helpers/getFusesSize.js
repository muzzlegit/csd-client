import fuses from '../data/fuses.json';

export default function getFusesSize(fuseCurrent){
  let size = '';
  fuses.forEach(fuse => {
    if(fuseCurrent === 0){return size = 'none'}
    if(fuseCurrent === fuse.current){
      return size = fuse.size;
    }
  })
  return size;
}