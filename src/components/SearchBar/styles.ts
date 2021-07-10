import { StyleSheet } from "react-native";
import { globalConfig } from "../../global/dimensions";

export const styles = StyleSheet.create({
    container: {
        marginHorizontal: globalConfig.dimensions.marginH
    },
    header: {
        marginTop: 63
    },
    title: {
        fontFamily: 'Inter-bold',
        fontSize: 35,
        fontWeight: 'bold',
        marginBottom: 20
    },
    searchButton: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: '#282828',
        height: 54,
        borderRadius: 5,
        marginBottom: 27
    },
    textBtn: {
        marginLeft: 20,
        fontSize: 20,
        color:'#fff'
    },
    icon: {
        tintColor: '#fff',
        marginLeft: 19
    }
})