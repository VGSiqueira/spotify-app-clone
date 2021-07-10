import { Dimensions } from "react-native"

const {width, height} = Dimensions.get('window')

export const globalConfig = {
    
    glocalDimensions:{
        width: width,
        height: height
    },
    dimensions: {
        marginH: width/25,

    },
    colors:{
        cardBg: '#4B4B4B'
    },
    title: {
        fontFamily: 'Inter-Bold',
        // fontWeight: '500',
        fontSize: 20,
    },
    albumSubTitle:{
        fontFamily: 'Inter-Bold',
        fontSize: 12,
        // fontWeight: '500',
    },


}