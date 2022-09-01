import { useEffect, useState } from "react"
import getFusesSize from "../../../helpers/getFusesSize";

import {
  ItemListSection,
  ItemBox

 } from "./ItemsList.styled";

export default function ItemsList({сrp}) {
  const [capacitors, setCapacitors] = useState([]);
  const [contactors, setContactors] = useState([]);
  const [fuses, setFuses] = useState([]);
  const [fusesHolders, setFusesHolders] = useState([]);

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

  useEffect(() => {
    let currentsArray = [];
    let sizesArray = [];
    сrp.fuses.forEach(fuse => {
      currentsArray.push(fuse.current);
      if(fuse.size !== ""){sizesArray.push(fuse.size)};
    });
    let fusesArray = currentsArray.reduce(function(acc, el) {
      acc[el] = (acc[el] || 0) + 1;
      return acc;
    }, {});
    let holdersSizesArray = sizesArray.reduce(function(acc, el) {
      acc[el] = (acc[el] || 0) + 1;
      return acc;
    }, {});
    setFuses(fusesArray);
    setFusesHolders(holdersSizesArray);
  }, [сrp]);

  return (
    <ItemListSection>
      <ItemBox>
        <h2>Capacitors</h2>
        <ul>
          {
            Object.entries(capacitors).map((capacitor) => {
              if(Number(capacitor[0]) === 0){return null}
              return (
                  <li>
                  {capacitor[0]} kVAr x {capacitor[1]}
                </li>
              )
            })
          }
        </ul>
      </ItemBox>
      <ItemBox>
        <h2>Contactors</h2>
        <ul>
          {
            Object.entries(contactors).map((contactor) => {
              if(Number(contactor[0]) === 0){return null}
              return (
                <li>
                  {contactor[0]} kVAr x {contactor[1]}
                </li>
              )
            })
          }
        </ul>
      </ItemBox>
      <ItemBox>
        <h2>Fuses</h2>
        <ul>
          {
            Object.entries(fuses).map((fuse) => {
              if(Number(fuse[0]) === 0){return null}
              return (
                <li>
                  {fuse[0]} A x {fuse[1] * 3} {getFusesSize(Number(fuse[0]))}
                </li>
              )
            })
          }
        </ul>
      </ItemBox>
      <ItemBox>
        <h2>FusesHolders</h2>
        <ul>
          {
            Object.entries(fusesHolders).map((fuseHolder) => {
              return (
                <li>
                  {fuseHolder[0]} x {fuseHolder[1]}
                </li>
              )
            })
          }
        </ul>
      </ItemBox>
    </ItemListSection>
  )
}