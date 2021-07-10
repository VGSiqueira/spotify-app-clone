import React, {FC, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './styles';

const SearchBar: FC<unknown> = () => {
    
    return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Search</Text>
      </View>
      <TouchableOpacity style={styles.searchButton}>
          <Image source={require('../../assets/icons/search-small.png')} style={styles.icon} />
        <Text style={styles.textBtn}>Artists, songs or podcasts</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
