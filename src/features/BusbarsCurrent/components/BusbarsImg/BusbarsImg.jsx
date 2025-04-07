import { configObj } from "features/BusbarsCurrent/utils/config";
import { BusbarsMaterialType } from "features/BusbarsCurrent/utils/types";
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
