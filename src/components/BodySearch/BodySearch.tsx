import React, {FC} from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles';
import GenreCard from '../GenreCard/GenreCard';
const BodySearch: FC<unknown> = () => {

    return(
        <View style={styles.container}>
           <Text style={styles.title}>Your top genres</Text>
           <View style={styles.cardColumns}>
           <View style={styles.column}>
                <GenreCard title="Pop" bgColor="#A6CDAB" imgsrc={require('../../assets/genre-cards/pop.png')}/>
                <GenreCard title="Hip Pop" bgColor="#F59B23" imgsrc={require('../../assets/genre-cards/hip-hop.png')}/>
           </View>
           <View style={styles.column}>
                <GenreCard title="Bollywood" bgColor="#FF4632" imgsrc={require('../../assets/genre-cards/bollywood.png')}/>
                <GenreCard title="Folk & Acoustic" bgColor="#3E433F" imgsrc={require('../../assets/genre-cards/folk.png')}/>
           </View>
           </View>
           <Text style={styles.title}>Browse all</Text>
           <View style={styles.cardColumns}>
           <View style={styles.column}>
                <GenreCard title="Podcasts" bgColor="#D8A13E" imgsrc={require('../../assets/genre-cards/podcasts.png')}/>
                <GenreCard title="Charts" bgColor="#4C917E" imgsrc={require('../../assets/genre-cards/charts.png')}/>
           </View>
           <View style={styles.column}>
                <GenreCard title="New Release" bgColor="#585E82" imgsrc={require('../../assets/genre-cards/new-release.png')}/>
                <GenreCard title="Made for you" bgColor="#758D99" imgsrc={require('../../assets/genre-cards/made-for-you.png')}/>
           </View>
           </View>
        </View>
    )

}

export default BodySearch