import { LoginPopUp } from "modules/profile/components/LoginPopUp/LoginPopUp";
import { ProfileIcon } from "modules/profile/components/ProfileIcon/ProfileIcon";
import { useAuth } from "modules/profile/hooks/useAuth";
import { useProfileStore } from "modules/profile/store/useProfileStore";
import { Modal } from "shared/ui/components/Modal/Modal";

export const Profile = () => {
  const { isAuth } = useAuth();
  const setAuth = useProfileStore((state) => state.setAuth);

  const handleAuth = () => {
    setAuth(!isAuth);
  };

  return (
    <div>
      <Modal
        trigger={<ProfileIcon isAuth={isAuth} action={handleAuth} />}
        content={<LoginPopUp />}
      />
    </div>
  );
};
