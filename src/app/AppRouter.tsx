import { ProductChoice } from "features/Product-Choice";
import { RootLayout } from "layouts";
import { Switches } from "modules/switches";
import { Terminals } from "modules/terminals";
import { Home } from "pages/Home/Home";
import { RpcPage } from "pages/Rpc/RpcPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<ProductChoice />} />
          <Route path="general-info" element={<Home />} />
          <Route path="rpc" element={<RpcPage />} />
          <Route path="switch" element={<Switches />} />
          <Route path="terminal" element={<Terminals />} />

          <Route path="/*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
