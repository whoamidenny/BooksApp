import React, {useState} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';

import styles from './styles';

const list = [1, 2, 3, 4, 5];

const RenderItem = ({item, index, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
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
        renderItem={({item, index}) => (
          <RenderItem item={item} index={index} onPress={props.onPressBook} />
        )}
      />
    </View>
  );
}

export default HorizontalBooksList;
