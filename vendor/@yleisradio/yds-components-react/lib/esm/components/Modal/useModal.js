import { useRef } from 'react';

const useModal = () => {
  const modalRef = useRef(null);
  const openModal = () => {
    var _a;
    (_a = modalRef.current) === null || _a === void 0 ? void 0 : _a.open();
  };
  const closeModal = () => {
    var _a;
    (_a = modalRef.current) === null || _a === void 0 ? void 0 : _a.close();
  };
  return {
    modalRef,
    openModal,
    closeModal
  };
};

export { useModal };
