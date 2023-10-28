// import { Picker } from "@react-native-picker/picker";
import React from "react";

const CustomSelectPicker = () => (
  <>
    {/* <Picker
      mode={"dialog"}
      placeholder="Gender"
      style={[
        styles.picker,
        {
          color:
            values.gender && Object.values(Gender).includes(values.gender)
              ? "#000000"
              : "#8F8F8F",
        },
      ]}
      selectionColor={"red"}
      selectedValue={values.gender}
      onValueChange={handleChange("gender")}
      onBlur={handleBlur("gender")}
      prompt="Options"
    >
      <Picker.Item label={t("sign-up.form.gender.select")} value={""} />
      <Picker.Item label={t("sign-up.form.gender.male")} value={Gender.Male} />
      <Picker.Item
        label={t("sign-up.form.gender.female")}
        value={Gender.Female}
      />
    </Picker> */}
  </>
);

export default CustomSelectPicker;
