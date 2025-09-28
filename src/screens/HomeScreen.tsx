import { View, StyleSheet } from "react-native";
import ListCard from "../components/ProductListCard";
import { colors } from "../theme/colors";
import { w } from "../layout/metrics";


const HomeScreen = () => {
  
  return (
    <View style={styles.container}>
      <ListCard />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: w(20),
  },
});

export default HomeScreen;