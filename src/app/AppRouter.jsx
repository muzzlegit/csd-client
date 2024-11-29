
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./RootLayout";

const AppRouter = () => {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
      }}
    >
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<div />} />
          <Route path="auth" element={<div />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
