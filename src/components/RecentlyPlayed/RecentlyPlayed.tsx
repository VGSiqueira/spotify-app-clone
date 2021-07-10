import React, {FC} from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { globalConfig } from '../../global/dimensions';
import { styles } from './styles';

const img1 = require('../../assets/img/recently-played/punya-paap.png')
const img2 = require('../../assets/img/recently-played/selena-spotify.png')
const img3 = require('../../assets/img/recently-played/love-me-like-you-do.png')
const img4 = require('../../assets/img/recently-played/summer-rewind-2020_LARGE-en.png')
const img5 = require('../../assets/img/recently-played/stress.png')
const img6 = require('../../assets/img/recently-played/deluxe.png')
const img7 = require('../../assets/img/recently-played/dark-&-stormy.png')

const RecentlyPlayed: FC <unknown> = () => {

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={globalConfig.title}>Recently Played</Text>
            </View>
            <View style={styles.imgContainer}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                    <View style={styles.album}>
                        <Image source={img1} style={styles.img} />
                        <Text style={globalConfig.albumSubTitle}>Punya Paap</Text>
                    </View>
                    <View style={styles.album}>
                        <Image source={img2} style={styles.img} />
                        <Text style={globalConfig.albumSubTitle}>Selena Gomez</Text>
                    </View>
                    <View style={styles.album}>
                        <Image source={img3} style={styles.img} />
                        <Text style={globalConfig.albumSubTitle}>Love Me Like You Do - From Ellie Goulding</Text>
                    </View>
                    <View style={styles.album}>
                        <Image source={img4} style={styles.img} />
                        <Text style={globalConfig.albumSubTitle}>Summer Rewind</Text>
                    </View>
                    <View style={styles.album}>
                        <Image source={img5} style={styles.img} />
                        <Text style={globalConfig.albumSubTitle}>Stress Relief</Text>
                    </View>
                    <View style={styles.album}>
                        <Image source={img6} style={styles.img} />
                        <Text style={globalConfig.albumSubTitle}>Divide</Text>
                    </View>
                    <View style={styles.album}>
                        <Image source={img7} style={styles.img} />
                        <Text style={globalConfig.albumSubTitle}>Dark and Stormy</Text>
                    </View>
                </ScrollView>
            </View>
        </View>
    )

}

export default RecentlyPlayed