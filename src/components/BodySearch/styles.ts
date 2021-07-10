import { StyleSheet } from "react-native";
import { globalConfig } from "../../global/dimensions";

export const styles = StyleSheet.create({
    container: {
        marginHorizontal: globalConfig.dimensions.marginH
    },
    title: {
        fontFamily: 'Inter',
        fontSize: 22,
        fontWeight: '600',
        marginBottom: 14
    },
    cardColumns:{
        flexDirection: "row",
        justifyContent: "space-between"
    },
    column: {
        justifyContent: "center"
    }
})