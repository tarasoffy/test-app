import { FC } from "react";
import { Text, View, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { colors } from "../theme/colors";

type Props = {
  title: string;
};

const HeaderTitle: FC<Props> = ({ title }) => {
  return (
    <View>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default HeaderTitle;

const styles = StyleSheet.create({
  text: {
    fontSize: RFValue(16),
    fontFamily: "Abel",
    color: colors.black,
  },
});