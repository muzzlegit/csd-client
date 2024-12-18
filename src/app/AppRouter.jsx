import Grab from "modules/G/Grab";
import { InfoModule } from "modules/info";
import { Switches } from "modules/switches";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./RootLayout";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<InfoModule />} />
          <Route path="switch" element={<Switches />} />
          <Route path="rpc" element={<Grab />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
