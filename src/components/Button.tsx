import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { w } from "../layout/metrics";
import { RFValue } from "react-native-responsive-fontsize";
import { FC } from "react";
import { colors } from "../theme/colors";

type Props = {
  title: string;
  handlePress: () => void;
};

const Button: FC<Props> = ({ title, handlePress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: w(56),
    backgroundColor: colors.black,
    borderRadius: w(12),
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: RFValue(16),
    fontFamily: "Abel",
    color: colors.white,
  },
});