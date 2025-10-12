import { View, StyleSheet } from "react-native";
import ProductList from "../components/ProductList";
import { colors } from "../theme/colors";
import { w } from "../layout/metrics";


const HomeScreen = () => {
  
  return (
    <View style={styles.container}>
      <ProductList />
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