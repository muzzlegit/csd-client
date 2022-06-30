import { useEffect, useState } from "react"

import Ventilation from "./components/ventilation/Ventilation";
import CurrentCoefficient from "./components/CurrentCoefficient/CurrentCoefficient";

const defaultMainSwitchCoefficient = 1.8;
const defaultCapacitorCoefficient = 1.6;

function App() {
  const [mainSwitchCoefficient, setMainSwitchCoefficient] = useState(defaultMainSwitchCoefficient);
  const [capacitorCoefficient, setCapacitorCoefficient] = useState(defaultCapacitorCoefficient);

  return (
    <>
      <Ventilation/>
      <CurrentCoefficient
        defaultMainSwitchCoefficient={defaultMainSwitchCoefficient}
        defaultCapacitorCoefficient={defaultCapacitorCoefficient}
        mainSwitchCoefficient={mainSwitchCoefficient}
        setMainSwitchCoefficient={setMainSwitchCoefficient}
        capacitorCoefficient={capacitorCoefficient}
        setCapacitorCoefficient={setCapacitorCoefficient}
      />
    </>
  );
}

export default App;
