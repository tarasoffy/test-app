import { View, StyleSheet } from "react-native";
import { colors } from "../theme/colors";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "./types/root";
import FastImage from "react-native-fast-image";
import { w } from "../layout/metrics";
import mathUtils from "../utils/math";
import Button from "../components/ui/Button";
import DetailCard from "../components/ProductDetail";

type DetailRouteProp = RouteProp<RootStackParamList, "Detail">;

const DetailScreen = () => {
  const route = useRoute<DetailRouteProp>();
  const { data } = route.params;
  const {urls, user, alt_description, id} = data;

  const {randomNumber} = mathUtils();
  
  const price = randomNumber(20, 100);

  const handleAddToFavorites = () => {

  }

  return (
    <View style={styles.container}>
      <FastImage 
        source={{ uri: urls.regular }} 
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.content}>
        <DetailCard
          name={user.name} 
          price={price} 
          description={alt_description}
        />
        <Button title="Add to Favorites" handlePress={handleAddToFavorites}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  image: {
    height: '50%',
    width: '100%',
    borderBottomLeftRadius: w(20),
    borderBottomRightRadius: w(20),
  },
  content: {
    flex: 1,
    paddingHorizontal: w(20),
    paddingBottom: w(35),
    justifyContent: 'space-between',
  },
});

export default DetailScreen;
