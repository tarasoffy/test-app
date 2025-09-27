import { FC } from "react";
import { Text, View, StyleSheet } from "react-native";
import { w } from "../layout/metrics";
import { colors } from "../theme/colors";

type Props = {
    name: string;
    price: number;
    description: string;
}

const DetailCardDescription: FC<Props> = ({ name, price, description }) => {
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

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    name: {
        fontWeight: '700',
        fontFamily: 'Abel',
        fontSize: w(24),
        marginTop: w(20),
    },
    row: {
        marginTop: w(20),
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    price: {
        fontSize: w(18),
        fontFamily: 'Abel',
    },
    lorem: {
        fontSize: w(16),
        fontFamily: 'Abel',
        color: colors.grey,
    },
    separator: {
        width: '100%',
        height: w(1),
        backgroundColor: colors.lightGrey,
        marginTop: w(20),
    },
    sectionTitle: {
        fontSize: w(18),
        fontFamily: 'Abel',
        marginTop: w(20),
    },
    description: {
        fontSize: w(16),
        fontFamily: 'Abel',
        marginTop: w(20),
        color: colors.grey,
    },
});

export default DetailCardDescription;