import { StyleSheet } from "react-native";
import { w } from "../../../layout/metrics";
import { colors } from "../../../theme/colors";

export const styles = StyleSheet.create({
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
