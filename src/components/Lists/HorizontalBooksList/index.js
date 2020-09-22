import React, {useState} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {selectBooks} from '../../../redux/catalog';

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
          uri: `https://popcorn-books.xyz:8000/${item.imagePath}`,
        }}
        resizeMode="contain"
      />
      <Text style={styles.bookNameStyle}>
        {item.title.length > 20 ? `${item.title.slice(0, 20)}...` : item.title}
      </Text>
      <Text style={styles.authorNameStyle}>{item.additionalAuthor}</Text>
    </TouchableOpacity>
  );
};

function HorizontalBooksList(props) {
  const books = useSelector((state) => selectBooks(state));
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>Recommended for you</Text>
      <FlatList
        horizontal
        data={books}
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
