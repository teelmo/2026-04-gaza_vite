import { useRef } from 'react';

const useBottomSheet = () => {
  const bottomSheetRef = useRef(null);
  const openBottomSheet = () => {
    var _a;
    (_a = bottomSheetRef.current) === null || _a === void 0 ? void 0 : _a.open();
  };
  const closeBottomSheet = () => {
    var _a;
    (_a = bottomSheetRef.current) === null || _a === void 0 ? void 0 : _a.close();
  };
  return {
    bottomSheetRef,
    openBottomSheet,
    closeBottomSheet
  };
};

export { useBottomSheet };
