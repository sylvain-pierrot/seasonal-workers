import React, { PropsWithChildren } from "react";
import { Text } from "react-native-paper";

const Strong = (props: PropsWithChildren<any>) => (
  <Text style={{ fontWeight: "bold" }}>{props.children}</Text>
);

export default Strong;
