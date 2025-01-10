import PropTypes from "prop-types";
import { Backdrop, Content } from "./Modal.styled";

import { createPortal } from "react-dom";
import { useModal } from "./useModal";
import { ModalContext } from "./useModalContext";

const modalRoot = document.querySelector("#modal-root");

export const Modal = ({ trigger, content }) => {
  const { isModal, toggleModal, onBackdropClick } = useModal();

  if (!modalRoot) {
    console.error("modalRoot element not found in the DOM.");
    return null;
  }

  return (
    <ModalContext.Provider value={{ isModal, onBackdropClick, toggleModal }}>
      <div onClick={toggleModal}>{trigger}</div>
      {isModal
        ? createPortal(
            <Backdrop
              id="backdrop"
              onClick={(e) => {
                onBackdropClick(e.target.id);
              }}
            >
              <Content>{content}</Content>
            </Backdrop>,
            modalRoot
          )
        : null}
    </ModalContext.Provider>
  );
};

Modal.propTypes = {
  trigger: PropTypes.element.isRequired,
  content: PropTypes.element.isRequired,
};
