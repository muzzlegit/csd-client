import { useCallback, useEffect, useState } from "react";

const body = document.querySelector("body");

export const useModal = () => {
  const [isModal, setIsModal] = useState(false);

  const onBackdropClick = (id) => {
    if (id === "backdrop") setIsModal(false);
  };

  const onEscKeydown = useCallback((e) => {
    if (e.code === "Escape") {
      setIsModal(false);
    }
  }, []);

  const toggleModal = () => {
    setIsModal((prev) => {
      return !prev;
    });
  };

  useEffect(() => {
    body.style.overflow = isModal ? "auto" : "hidden";
    if (isModal) {
      window.addEventListener("keydown", onEscKeydown);
    } else {
      window.removeEventListener("keydown", onEscKeydown);
    }
    return () => {
      body.style.overflow = "auto";
      window.removeEventListener("keydown", onEscKeydown);
    };
  }, [isModal, onEscKeydown]);

  return { isModal, onBackdropClick, toggleModal };
};
