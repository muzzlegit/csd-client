export default function setCapacitor(step, manufacturer, voltage) {

  let crp = {capacitors: [], fuses: [], contactors: [], switch:0, ventilation: []};
  for (let index = 0; index < step; index++) {
    crp.capacitors.push(
      {
        step: index + 1,
        manufacturer: `${manufacturer}`,
        code: '',
        name: '',
        power: 0,
        voltage:  `${voltage}`,
        current: 0      
      }
    )
  }
  return crp;
}