import contactors from '../data/contactors.json';

export default function getContactors(capacitors) {
  console.log('functio',capacitors)
  let capacitorsArray = [];
  let powerArray = [];

  const isContactor = (contactor) => {
    if(contactor.power === Math.min(...powerArray)){
      return contactor;
    }
    return false;
  }

  capacitors.forEach((capacitor) => {

    if(capacitor.power === 0) {
      capacitorsArray.push({
        step: capacitor.step,
        manufacturer: "",
        power: 0,
      });
    } else {
      powerArray = [];
      contactors.forEach((contactor) => {
        if(contactor.power >= capacitor.power){
          powerArray.push(contactor.power);
        }
      });
      capacitorsArray.push({...contactors.find(isContactor), step: capacitor.step})
    }
  })
  return capacitorsArray;
}