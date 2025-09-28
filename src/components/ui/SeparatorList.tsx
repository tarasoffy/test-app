import { FC } from "react";
import { View, StyleSheet } from "react-native";
import { w } from "../../layout/metrics";

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