import React, {
  PropsWithChildren,
  forwardRef,
  useCallback,
  useMemo,
} from "react";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { BottomSheetBackdropProps } from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types";

const CustomBottomSheet = forwardRef<BottomSheet, PropsWithChildren>(
  ({ children }, ref) => {
    const snapPoints = useMemo(() => ["30%"], []);

    const handleSheetChanges = useCallback((index: number) => {}, []);

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
      <BottomSheet
        ref={ref}
        index={-1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        backdropComponent={renderBackdrop}
        enablePanDownToClose
      >
        <BottomSheetView>{children}</BottomSheetView>
      </BottomSheet>
    );
  }
);

export default CustomBottomSheet;
