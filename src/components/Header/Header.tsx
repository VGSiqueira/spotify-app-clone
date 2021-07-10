import React, {FC} from 'react';
import {View, Text} from 'react-native';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconEvilIcons from 'react-native-vector-icons/EvilIcons';
import {styles} from './styles';
import { globalConfig } from '../../global/dimensions';

const Header: FC<unknown> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.greeting}>
        <Text style={globalConfig.title}>Good afternoon</Text>
      </View>
      <View style={styles.iconBox}>
        <IconMaterial name="history" size={35} />
        <IconEvilIcons style={styles.icon}name="gear" size={35} />
      </View>
    </View>
  );
};

export default Header;
