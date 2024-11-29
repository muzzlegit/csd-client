import { RootLayouts } from "interface";
import { Busbars, Calculations, Switches } from "pages";
import { Route, Routes } from "react-router-dom";
import Rpc from "../components/RPC/Rpc/Rpc";

function App() {
  return (
    <RootLayouts>
      <Routes>
        <Route path="/rpc" element={<Rpc />} />
        <Route path="/" element={<Switches />} />
        <Route path="/copper" element={<Calculations />} />
        <Route path="/busbars" element={<Busbars />} />
      </Routes>
    </RootLayouts>
  );
}

export default App;
