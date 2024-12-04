import BusbarsCurrent from "modules/info/components/BusbarsCurrent/BusbarsCurrent";
import copperData from "../../data/copper.json";

const InfoModule = () => {
  return (
    <div>
      <BusbarsCurrent type="copper" busbarData={copperData} />
    </div>
  );
};

export default InfoModule;
