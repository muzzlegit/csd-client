export default function setCapacitor(step, manufacturer, voltage) {

  let capacitors = [];
  for (let index = 0; index < step; index++) {
    capacitors.push(
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

  return capacitors;
}