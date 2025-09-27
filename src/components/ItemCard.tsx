import { FC, memo, use } from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import FastImage from "react-native-fast-image";
import { colors } from "../theme/colors";
import { FavoriteFillIcon, FavoriteIcon } from "../assets/icons";
import { w } from "../layout/metrics";
import { truncateText } from "../utils/truncateText";
import { useTypedNavigation } from "../hooks/useTypedNavigation";

type Props = {
    data: DataCard;
}

const ItemCard: FC<Props> = memo(({ data }) => {
    const { user, urls } = data;
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

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: w(250),
    },
    image: {
        width: '100%',
        height: w(150),
        borderTopLeftRadius: w(20),
        borderTopRightRadius: w(20),
    },
    infoContainer: {
        backgroundColor: colors.lightGrey,
        height: w(100),
        paddingHorizontal: w(20),
        paddingVertical: w(10),
        borderBottomLeftRadius: w(20),
        borderBottomRightRadius: w(20),
        justifyContent: 'center',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    userRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: w(50),
        height: w(50),
        borderRadius: w(50),
    },
    name: {
        marginLeft: w(10),
        fontSize: w(18),
        fontWeight: '600',
        fontFamily: 'Abel',
    },
    likesRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    likesText: {
        fontSize: w(16),
        marginLeft: w(5),
    },
});

export default ItemCard;