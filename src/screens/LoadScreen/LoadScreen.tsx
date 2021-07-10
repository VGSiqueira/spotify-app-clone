import React, {FC} from 'react';
import {ImageBackground, View} from 'react-native';
import Logo from '../../assets/img/logo/Logo.png';
import {styles} from './styles';

const LoadScreen: FC<unknown> = () => {
  return (
    <View style={styles.container} >
      <ImageBackground source={Logo} resizeMode="stretch" style={styles.logo} />
    </View>
  );
};

export default LoadScreen;
