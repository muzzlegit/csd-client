import PropTypes from "prop-types";
import { TextInput } from "shared/ui";
import { useModalContext } from "shared/ui/components/Modal/useModalContext";
import { Container, Title } from "./LoginPopUp.styled";

export const LoginPopUp = () => {
  const { toggleModal } = useModalContext();

  return (
    <Container>
      <Title>Увійти</Title>
      <TextInput value="" handleInputValue={() => {}} placeholder="...name" />
      <TextInput
        value=""
        handleInputValue={() => {}}
        placeholder="...password"
      />
      <button onClick={toggleModal}>close</button>
    </Container>
  );
};

LoginPopUp.propTypes = {
  closeModal: PropTypes.func,
};
