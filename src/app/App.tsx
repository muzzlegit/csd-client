import { AppRouter } from "./AppRouter";
import { Providers } from "./Providers";

export const App = () => {
  return (
    <Providers>
      <AppRouter />
    </Providers>
  );
};
