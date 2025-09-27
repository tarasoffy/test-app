import { FC } from "react";
import { w } from "../layout/metrics";
import { View, StyleSheet } from "react-native";

type Props = {
  space: number;
};

const SeparatorList: FC<Props> = ({ space }) => {
  return <View style={[styles.separator, { height: w(space) }]} />;
};

export default SeparatorList;

const styles = StyleSheet.create({
  separator: {
    width: "100%",
  },
});