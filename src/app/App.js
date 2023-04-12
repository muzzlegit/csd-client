import { Routes, Route } from "react-router-dom";
//COMPONENTS
import Navigation from "modules/Navigation/Navigation";
// import Rpc from "../components/RPC/Rpc/Rpc";
import { Switches, Calculations } from "pages";

function App() {
  return (
    <div className="h-full grid grid-cols-layout grid-rows-layout grid-areas-layout gap-4">
      <Navigation />
      <Routes>
        {/* <Route path="/" element={<Rpc />} /> */}
        <Route path="/copper" element={<Calculations />} />
        <Route path="/switches" element={<Switches />} />
      </Routes>
    </div>
  );
}

export default App;
