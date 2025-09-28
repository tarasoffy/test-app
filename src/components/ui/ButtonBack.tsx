import { TouchableOpacity, StyleSheet } from "react-native";
import { FC, JSX } from "react";
import { colors } from "../../theme/colors";
import { w } from "../../layout/metrics";

type Props = {
  handlePress: () => void;
  icon: JSX.Element
};

const ButtonBack: FC<Props> = ({ handlePress, icon}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      {icon}
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