import type { BottomSheetHandle } from './BottomSheet.js';
export declare const useBottomSheet: () => {
    bottomSheetRef: import("react").MutableRefObject<BottomSheetHandle>;
    openBottomSheet: () => void;
    closeBottomSheet: () => void;
};
