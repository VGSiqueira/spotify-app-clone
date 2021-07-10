import React, {FC} from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './styles';

type CardProps = {
  title: string;
  imgsrc: any;
};

const Card: FC<CardProps> = ({title, imgsrc}) => {
  return (
      <View style={styles.card}>
        <Image source={imgsrc} style={styles.img} />
        <Text style={styles.title}>{title}</Text>
      </View>
  );
};

export default Card;
