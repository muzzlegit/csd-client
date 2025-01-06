import PropTypes from "prop-types";
import { GiBleedingEye, GiHumanTarget } from "react-icons/gi";
import { Container } from "./ProfileIcon.styled";

export const ProfileIcon = ({ isAuth, action }) => {
  return (
    <Container isAuth={isAuth} onClick={action}>
      {isAuth ? <GiBleedingEye size="36" /> : <GiHumanTarget size="36" />}
    </Container>
  );
};

ProfileIcon.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  action: PropTypes.func,
};
