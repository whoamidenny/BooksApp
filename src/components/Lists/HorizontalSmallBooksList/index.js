import React, {useState} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';

import styles from './styles';

const list = [1, 2, 3, 4, 5];

const RenderItem = ({item, index}) => {
  const [listTags, setList] = useState();
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
    </TouchableOpacity>
  );
};

function HorizontalSmallBooksList(props) {
  return (
    <View style={styles.container}>
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

export default HorizontalSmallBooksList;
