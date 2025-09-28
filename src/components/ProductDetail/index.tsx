import { FC } from "react";
import { Text, View } from "react-native";
import { styles } from "./ProductDetail.styles";

type Props = {
    name: string;
    price: number;
    description: string;
}

const ProductDetail: FC<Props> = ({ name, price, description }) => {
    return (
        <View style={styles.container}>
            <Text numberOfLines={5} ellipsizeMode="tail" style={styles.name}>
                {name}
            </Text>

            <View style={styles.row}>
                <Text style={styles.price}>${price}.00</Text>
                <Text style={styles.lorem}>Lorem ipsum</Text>
            </View>

            <View style={styles.separator} />

            <Text style={styles.sectionTitle}>Description</Text>
            <Text numberOfLines={4} ellipsizeMode="tail" style={styles.description}>
                {description}
            </Text>
        </View>
    )
}

export default ProductDetail;