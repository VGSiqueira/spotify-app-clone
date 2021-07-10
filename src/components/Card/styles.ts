import { StyleSheet } from "react-native";
import { globalConfig } from "../../global/dimensions";

export const styles = StyleSheet.create({
    card: {
        backgroundColor: globalConfig.colors.cardBg,
        width: '100%' ,
        height: 60,
        borderRadius: 5,
        marginBottom: 5,
        flexDirection: "row",
        alignItems: "center",
    },
    img: {
        width: 60,
        height: 60,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
    },
    title:{
        marginLeft: 10,
        fontFamily: 'Inter',
        fontSize: 15,
        fontWeight: '500',
        color: '#fff'
    }
})