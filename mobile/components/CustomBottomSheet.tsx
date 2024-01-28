import React, {
  PropsWithChildren,
  forwardRef,
  useCallback,
  useMemo,
} from "react";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { BottomSheetBackdropProps } from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types";

const CustomBottomSheet = forwardRef<BottomSheetModal, PropsWithChildren>(
  ({ children }, ref) => {
    const renderBackdrop = useCallback(
      (props: BottomSheetBackdropProps) => (
        <BottomSheetBackdrop
          {...props}
          disappearsOnIndex={-1}
          appearsOnIndex={0}
        />
      ),
      []
    );

    return (
      <BottomSheetModal
        ref={ref}
        index={0}
        backdropComponent={renderBackdrop}
        enablePanDownToClose
        enableDynamicSizing
      >
        <BottomSheetView>{children}</BottomSheetView>
      </BottomSheetModal>
    );
  }
);

export default CustomBottomSheet;
