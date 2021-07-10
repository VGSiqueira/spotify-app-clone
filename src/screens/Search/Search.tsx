import React, {FC} from 'react';
import { View, ScrollView } from 'react-native';
import SearchBar from '../../components/SearchBar/SearchBar';
import { globalConfig } from '../../global/dimensions';
import BodySearch from '../../components/BodySearch/BodySearch';

const Search: FC<unknown> = () => {
  return (
    <View>
      <ScrollView >
        <SearchBar />
        <BodySearch />
        <BodySearch />
      </ScrollView>
    </View>
  );
};

export default Search;
