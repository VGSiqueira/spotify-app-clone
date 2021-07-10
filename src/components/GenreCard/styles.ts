import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    card:{
        width: 190,
        height: 110,
        borderRadius: 5,
        flexDirection: "row",
        marginBottom: 19
    },
    title: {
        color: '#fff',
        fontSize: 19,
        fontWeight: "900",
        fontFamily: 'Inter',
        marginLeft: 16,
        marginTop: 15,
    },
    img: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        borderBottomRightRadius: 5,
    }
})