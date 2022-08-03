import fuses from '../fuses.json';

export default function getFuseCurrent(capacitorCurrent, capacitorCoefficient) {

  let currentArray = [];
  if(capacitorCurrent === 0){return [0]}
  fuses.forEach(fuse => {
    if(fuse.current && fuse.current >= Math.ceil(capacitorCurrent * capacitorCoefficient)){
      currentArray.push(fuse.current);
      console.log(currentArray);
    }
  });

  return Math.min(...currentArray);
}