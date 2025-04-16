import { ProductChoice } from "features/Product-Choice";
import { RootLayout } from "layout";
import Grab from "modules/G/Grab";
import { Switches } from "modules/switches";
import { Terminals } from "modules/terminals";
import { Home } from "pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="product-choice" element={<ProductChoice />} />
          <Route path="switch" element={<Switches />} />
          <Route path="terminal" element={<Terminals />} />
          <Route
            path="admin-panel"
            element={
              <ProtectedRoute>
                <Grab />
              </ProtectedRoute>
            }
          />
          <Route path="/*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
