import { TouchableOpacity, StyleSheet } from "react-native";
import { ArrowLeftIcon } from "../assets/icons";
import { w } from "../layout/metrics";
import { FC } from "react";
import { colors } from "../theme/colors";

type Props = {
  handlePress: () => void;
};

const ButtonBack: FC<Props> = ({ handlePress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <ArrowLeftIcon />
    </TouchableOpacity>
  );
};

export default ButtonBack;

const styles = StyleSheet.create({
  button: {
    width: w(56),
    height: w(56),
    borderRadius: w(28),
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: w(35),
    left: w(13),
  },
});