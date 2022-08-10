import capacitors from '../data/capacitors.json';

export default function getCapacitor(capacitorPower, capacitorVoltage, capacitorManufacturer, step) {

  let g = {};
  let key = 0;

  capacitors.forEach(capacitor => {
    if(capacitor.power === capacitorPower && capacitor.voltage === capacitorVoltage && capacitor.manufacturer === capacitorManufacturer){
      g = {...capacitor, step:step};
      key = 1;
    }
  });
  if(key === 0){
    g = {
      step: step,
      manufacturer: `${capacitorManufacturer}`,
      code: '',
      name: '',
      power: 0,
      voltage:  `${capacitorVoltage}`,
      current: 0
    }
  }
  return g;
}