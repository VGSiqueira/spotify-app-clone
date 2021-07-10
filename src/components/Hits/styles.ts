import { StyleSheet } from "react-native";
import { globalConfig } from "../../global/dimensions";

export const styles = StyleSheet.create({
    container: {
        marginLeft: globalConfig.dimensions.marginH,
    },
    header:{
        marginVertical: 18
    },
    imgContainer: {

    },
    img: {
        width: 140,
        height: 140,
        marginBottom: 5
    },
    album:{
        marginRight: 15,
        alignItems: "center",
        width: 140
    },
})