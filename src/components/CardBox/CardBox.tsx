import React, {FC} from 'react';
import {Image, View} from 'react-native';
import {styles} from './styles';
import Card from '../Card/Card';

const CardBox: FC<unknown> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <Card
          title="Top Hits Hindi"
          imgsrc={require('../../assets/img/top-albums/top-hits-hindi.png')}
        />
        <Card
          title="Traveling songs"
          imgsrc={require('../../assets/img/top-albums/travelling-songs.png')}
        />
        <Card
          title="Bollywood Butter"
          imgsrc={require('../../assets/img/top-albums/bollywood-butter.png')}
        />
      </View>
      <View style={styles.column}>
        <Card
          title="Arijit singh"
          imgsrc={require('../../assets/img/top-albums/arijit-singh.png')}
        />
        <Card
          title="Warrior Workout"
          imgsrc={require('../../assets/img/top-albums/warrior-workout.png')}
        />
        <Card
          title="Hot Country"
          imgsrc={require('../../assets/img/top-albums/top-country.png')}
        />
      </View>
    </View>
  );
};

export default CardBox;
