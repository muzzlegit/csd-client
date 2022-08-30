import { Routes, Route } from 'react-router-dom';

import Navigation from "./components/Navigation/Navigation";
import Rpc from './components/RPC/Rpc/Rpc';
import CopperPrice from './components/COPPERPRICE/Copper/CopperPrice';

function App() {

  return (
      <>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Rpc />}/>
          <Route path="/copper" element={<CopperPrice />}/>
        </Routes>
      </>
  )
}

export default App;
