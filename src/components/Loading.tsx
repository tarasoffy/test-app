import { FC } from "react";
import { ActivityIndicator, Text, View, StyleSheet } from "react-native";
import { w } from "../layout/metrics";

type Props = {
    title: string;
}

const Loading: FC<Props> = ({ title }) => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" />
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        marginTop: w(10),
        fontSize: w(16),
        fontFamily: 'Abel',
    },
});

export default Loading;
