import { configObj } from "features/BusbarsCurrent/config";
import { BusbarsMaterialType } from "features/BusbarsCurrent/types";
import { Img } from "./BusbarsImg.styled";

const BusbarsImg = ({ busbarsMaterial }) => {
  return (
    <>
      <Img src={configObj?.image?.[busbarsMaterial]} alt="busbars image" />
    </>
  );
};

export default BusbarsImg;

BusbarsImg.propTypes = {
  busbarsMaterial: BusbarsMaterialType,
};
