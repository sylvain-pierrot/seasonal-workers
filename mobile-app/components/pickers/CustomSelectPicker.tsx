import { Picker } from "@react-native-picker/picker";
import React from "react";
import { NativeSyntheticEvent, TargetedEvent } from "react-native";
import { useTheme } from "react-native-paper";

interface IPropsCustomSelectPicker {
  value: string;
  placeholder: string;
  options: {
    label: string;
    value: string;
  }[];
  onChange: (value: string) => void;
  onBlur?: (e: NativeSyntheticEvent<TargetedEvent>) => void;
}

const CustomSelectPicker = ({
  value,
  placeholder,
  options,
  onChange,
  onBlur,
}: IPropsCustomSelectPicker) => {
  const theme = useTheme();

  return (
    <Picker
      mode={"dialog"}
      placeholder={placeholder}
      selectionColor={"red"}
      selectedValue={value}
      onValueChange={onChange}
      onBlur={onBlur}
      prompt="Options"
      style={{
        backgroundColor: "#F6F6F6",
        borderRadius: (theme.isV3 ? 5 : 1) * theme.roundness,
      }}
    >
      {options.map((item, key) => (
        <Picker.Item key={key} label={item.label} value={item.value} />
      ))}
    </Picker>
  );
};

export default CustomSelectPicker;
