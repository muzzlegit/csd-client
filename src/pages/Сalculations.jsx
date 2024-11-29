//COMPONENTS
import { Aluminum, CopperPrice } from "modules/calculations";

const Сalculations = () => {
  return (
    <div className="h-full grid grid-cols-calculations grid-rows-calculations grid-areas-calculations gap-4">
      <div className="grid-in-C2 p-2 bg-primary shadow-switches rounded-md">
        <CopperPrice />
      </div>
      <div className="grid-in-C3 p-2 bg-primary shadow-switches rounded-md"></div>
      <div className="grid-in-C11 p-2 bg-primary shadow-switches rounded-md">
        <Aluminum />
      </div>
    </div>
  );
};

export default Сalculations;
