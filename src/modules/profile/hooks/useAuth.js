import { useProfileStore } from "../store/useProfileStore";

export const useAuth = () => {
  const isAuth = useProfileStore((state) => state.isAuth);

  return { isAuth };
};
