import { FC } from "react";
import { Text, View, StyleSheet } from "react-native";
import { w } from "../layout/metrics";

type Props = {
    error: string;
}

const WrongLoadList: FC<Props> = ({ error }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Wrong! {error}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: w(16),
        fontFamily: 'Abel',
    },
});

export default WrongLoadList;
