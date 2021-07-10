import React, {FC} from 'react';
import {View} from 'react-native';
import Header from '../Header/Header';
import CardBox from '../CardBox/CardBox';

const TopMusics: FC<unknown> = () => {
  return (
    <View>
        <Header />
        <CardBox />
    </View>
  );
};

export default TopMusics;
