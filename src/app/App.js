import { Routes, Route } from "react-router-dom";
//COMPONENTS
import Navigation from "modules/Navigation/Navigation";
// import Rpc from "../components/RPC/Rpc/Rpc";
// import CopperPrice from "../components/COPPERPRICE/Copper/CopperPrice";
import { Switches } from "pages";
//STYLES
import { Container } from "./styles/App.styled";

function App() {
  return (
    <Container>
      <Navigation />
      <Routes>
        {/* <Route path="/" element={<Rpc />} />
        <Route path="/copper" element={<CopperPrice />} /> */}
        <Route path="/switches" element={<Switches />} />
      </Routes>
    </Container>
  );
}

export default App;
