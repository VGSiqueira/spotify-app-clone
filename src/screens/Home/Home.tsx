import React, {FC} from 'react';
import {View, ScrollView} from 'react-native';
import TopMusics from '../../components/TopMusics/TopMusics';
import RecentlyPlayed from '../../components/RecentlyPlayed/RecentlyPlayed';
import Hits from '../../components/Hits/Hits';

const Home: FC<unknown> = () => {
  return (
    <View>
      <ScrollView>
        <TopMusics />
        <RecentlyPlayed />
        <Hits />
        <Hits />
        <Hits />
      </ScrollView>
    </View>
  );
};

export default Home;
