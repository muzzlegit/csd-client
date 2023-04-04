import { Routes, Route } from 'react-router-dom';
//COMPONENTS
import Navigation from "./components/Navigation/Navigation";
import Rpc from './components/RPC/Rpc/Rpc';
import CopperPrice from './components/COPPERPRICE/Copper/CopperPrice';
import Switches from './components/SWITCHES/Switches/Switches';

function App() {

  return (
      <>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Rpc />}/>
          <Route path="/copper" element={<CopperPrice />}/>
          <Route path='/switches' element={<Switches />}/>
        </Routes>
      </>
  )
}

export default App;
