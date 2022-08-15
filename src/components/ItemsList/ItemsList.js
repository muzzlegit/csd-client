import { useEffect, useState } from "react"

export default function ItemsList({сrp}) {
  const [capacitors, setCapacitors] = useState([]);
  const [contactors, setContactors] = useState([]);

  useEffect(() => {
    let powersArray = [];
    сrp.capacitors.forEach(capacitor => {
      powersArray.push(capacitor.power);
    });
    let capacitorArray = powersArray.reduce(function(acc, el) {
      acc[el] = (acc[el] || 0) + 1;
      return acc;
    }, {});
    setCapacitors(capacitorArray);
  }, [сrp]);

  useEffect(() => {
    let powersArray = [];
    сrp.contactors.forEach(contactor => {
      powersArray.push(contactor.power);
    });
    let contactorArray = powersArray.reduce(function(acc, el) {
      acc[el] = (acc[el] || 0) + 1;
      return acc;
    }, {});
    setContactors(contactorArray);
  }, [сrp]);
  

  return (
    <>
      <h2>Capacitors</h2>
      <ul>
        {
          Object.entries(capacitors).map((capacitor) => {
            return (
              <li>
                {capacitor[0]} kVAr x {capacitor[1]}
              </li>
            )
          })
        }
      </ul>
      <h2>Contactors</h2>
      <ul>
        {
          Object.entries(contactors).map((contactor) => {
            return (
              <li>
                {contactor[0]} kVAr x {contactor[1]}
              </li>
            )
          })
        }
      </ul>
      <h2>Fuses</h2>
    </>
  )
}