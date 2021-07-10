import React, {FC} from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { styles } from './styles';

type GenreCardProps = {
    title: string;
    imgsrc: any;
    bgColor: string;
}

const GenreCard: FC<GenreCardProps> = ({title, imgsrc, bgColor}) => {

    return(
        <TouchableOpacity style={[styles.card, {backgroundColor: bgColor}]} >
            <Text style={styles.title}>{title}</Text>
            <Image source={imgsrc} style={styles.img} />
        </TouchableOpacity>
    )

}

export default GenreCard