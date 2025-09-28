import { FC, memo } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import FastImage from "react-native-fast-image";
import { FavoriteFillIcon, FavoriteIcon } from "../../../assets/icons";
import { useTypedNavigation } from "../../../hooks/useTypedNavigation";
import FormatString from "../../../utils/formatString";
import { styles } from "./ProductItemCard.styles";

type Props = {
    data: DataCard;
}

const ProductItemCard: FC<Props> = memo(({ data }) => {
    const { user, urls } = data;

    const {truncateText} = FormatString()
    const name = truncateText(user.name, 14);

    const navigation = useTypedNavigation<'Home'>();
    const goToDetailScreen = () => {
        navigation.navigate('Detail', { data });
    }

    return (
      <TouchableOpacity onPress={goToDetailScreen} style={styles.container}>
        <FastImage 
          source={{ uri: urls.regular }}
          resizeMode="cover"
          style={styles.image}
        />
        <View style={styles.infoContainer}>
          <View style={styles.row}>
            <View style={styles.userRow}>
              <FastImage 
                source={{ uri: user.profile_image.large }}
                resizeMode="cover"
                style={styles.avatar}
              />
              <Text style={styles.name}>{name}</Text>
            </View>
            <View style={styles.likesRow}>
                {data.isFavorite? <FavoriteFillIcon />: <FavoriteIcon />}
                <Text style={styles.likesText}>{user.total_likes}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
},(prev, next) => prev.data.isFavorite === next.data.isFavorite);

export default ProductItemCard;