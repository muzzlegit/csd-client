import fuses from '../fuses.json';

export default function getFuseCurrent(capacitorCurrent, capacitorCoefficient) {

  let currentArray = [0];

  fuses.forEach(fuse => {
    if(fuse.current && fuse.current >= Math.ceil(capacitorCurrent * capacitorCoefficient)){
      currentArray.push(fuse.current);
    }
  });

  return Math.min(...currentArray);
}