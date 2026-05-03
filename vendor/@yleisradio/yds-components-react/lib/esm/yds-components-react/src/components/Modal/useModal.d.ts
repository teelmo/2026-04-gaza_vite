import type { ModalHandle } from './Modal.js';
export declare const useModal: () => {
    modalRef: import("react").MutableRefObject<ModalHandle>;
    openModal: () => void;
    closeModal: () => void;
};
