import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {SearchInput} from '../../Inputs';

import styles from './styles';
import {Avatar, Icon} from 'react-native-elements';
import {scaledSize} from '../../../styles';

const list = [1, 2, 3, 4, 5];

const RenderItem = ({item, index}) => {
  return (
    <TouchableOpacity
      style={index === 0 ? styles.firstItemContainer : styles.itemContainer}>
      <Image
        style={styles.imageStyle}
        source={{
          uri:
            'https://images-na.ssl-images-amazon.com/images/I/91RuWUOAhbL.jpg',
        }}
      />
      <Text style={styles.bookNameStyle}>Laborum essepter</Text>
      <Text style={styles.authorNameStyle}>George Perry</Text>
    </TouchableOpacity>
  );
};

function HorizontalBooksList(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>Recommended for you</Text>
      <FlatList
        horizontal
        data={list}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => <RenderItem item={item} index={index} />}
      />
    </View>
  );
}

export default HorizontalBooksList;
