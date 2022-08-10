import fuses from '../data/fuses.json';

export default function getFuses(capacitors, capacitorCoefficient) {
  let fusesArray = [];
  let currentArray = [];

  const isFuse = (fuse) => {
    if(fuse.current === Math.min(...currentArray)){
      return fuse;
    }
    return false;
  };

  capacitors.forEach((capacitor) => {
    if(capacitor.current === 0){
      fusesArray.push({step: capacitor.step, size: "", current: 0});
    } else {
      currentArray = [];
      fuses.forEach(fuse => {
        if(capacitor.current !== 0 && fuse.current >= Math.ceil(capacitor.current * capacitorCoefficient)){
          currentArray.push(fuse.current);
        }
      });
      fusesArray.push({...fuses.find(isFuse), step: capacitor.step});
    }
  });
  return fusesArray; 
}