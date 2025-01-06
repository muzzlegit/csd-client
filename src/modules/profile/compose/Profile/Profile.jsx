import { ProfileIcon } from "modules/profile/components/ProfileIcon/ProfileIcon";
import { useAuth } from "modules/profile/hooks/useAuth";
import { useProfileStore } from "modules/profile/store/useProfileStore";

export const Profile = () => {
  const { isAuth } = useAuth();
  const setAuth = useProfileStore((state) => state.setAuth);

  const handleAuth = () => {
    setAuth(!isAuth);
  };

  return (
    <div>
      <ProfileIcon isAuth={isAuth} action={handleAuth} />
    </div>
  );
};
