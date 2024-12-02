import { InfoModule } from "modules/info";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./RootLayout";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<InfoModule />} />
          <Route path="switch" element={<div />} />
          <Route path="rpc" element={<div />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
