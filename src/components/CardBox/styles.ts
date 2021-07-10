import { StyleSheet } from "react-native";
import { globalConfig } from "../../global/dimensions";

export const styles = StyleSheet.create({
    container: {
        height: globalConfig.glocalDimensions.height / 4,
        // backgroundColor: '#BDBDBD',
        marginHorizontal: globalConfig.dimensions.marginH,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    column: {
        width: '49.5%'
    },
})