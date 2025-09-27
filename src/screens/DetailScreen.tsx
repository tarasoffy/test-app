import { View, StyleSheet } from "react-native";
import { colors } from "../theme/colors";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "./types/root";
import FastImage from "react-native-fast-image";
import { w } from "../layout/metrics";
import DetailCardDescription from "../components/DetailCardDescription";
import Button from "../components/Button";
import { randomPrice } from "../utils/randomPrice";
import { useAddFavorite } from "../api/cards";

type DetailRouteProp = RouteProp<RootStackParamList, "Detail">;

const DetailScreen = () => {
  const route = useRoute<DetailRouteProp>();
  const { data } = route.params;
  const {urls, user, alt_description, id} = data

  const { mutate: addFavorite } = useAddFavorite();
  
  const price = randomPrice();

  const handleAddToFavorites = () => {
    addFavorite(id)
  }

  return (
    <View style={styles.container}>
      <FastImage 
        source={{ uri: urls.regular }} 
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.content}>
        <DetailCardDescription 
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
