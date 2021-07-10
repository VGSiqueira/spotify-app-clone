import React, {FC} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import { globalConfig } from '../../global/dimensions';
import {styles} from './styles';

const img1 = require('../../assets/img/hits/dail-mix-1.png')
const img2 = require('../../assets/img/hits/dail-mix-3.png')
const img3 = require('../../assets/img/hits/dance-hits.png')
const img4 = require('../../assets/img/hits/hits-2013.png')
const img5 = require('../../assets/img/hits/k-pop.png')
const img6 = require('../../assets/img/hits/hits-2009.png')
const img7 = require('../../assets/img/hits/hit-repeat.png')

const Hits: FC<unknown> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={globalConfig.title}>Hits of yesterday and today</Text>
      </View>
      <View style={styles.imgContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.album}>
            <Image source={img1} style={styles.img} />
            <Text style={globalConfig.albumSubTitle}>Daily Mix 1</Text>
          </View>
          <View style={styles.album}>
            <Image source={img2} style={styles.img} />
            <Text style={globalConfig.albumSubTitle}>Daily Mix 3</Text>
          </View>
          <View style={styles.album}>
            <Image source={img3} style={styles.img} />
            <Text style={globalConfig.albumSubTitle}>
              Dance Hits
            </Text>
          </View>
          <View style={styles.album}>
            <Image source={img4} style={styles.img} />
            <Text style={globalConfig.albumSubTitle}>Top Hits 2013</Text>
          </View>
          <View style={styles.album}>
            <Image source={img5} style={styles.img} />
            <Text style={globalConfig.albumSubTitle}>K-Pop</Text>
          </View>
          <View style={styles.album}>
            <Image source={img6} style={styles.img} />
            <Text style={globalConfig.albumSubTitle}>Top Hits 2013</Text>
          </View>
          <View style={styles.album}>
            <Image source={img7} style={styles.img} />
            <Text style={globalConfig.albumSubTitle}>Hit Repeat</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Hits;
