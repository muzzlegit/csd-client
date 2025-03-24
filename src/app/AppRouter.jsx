import { RootLayout } from "layout";
import Grab from "modules/G/Grab";
import { InfoModule } from "modules/info";
import { Switches } from "modules/switches";
import { Terminals } from "modules/terminals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<InfoModule />} />
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
          <Route path="/*" element={<InfoModule />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
