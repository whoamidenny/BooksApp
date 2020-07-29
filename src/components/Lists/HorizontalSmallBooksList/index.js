import React, {useState} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';

import styles from './styles';

const list = [1, 2, 3, 4, 5];

const RenderItem = ({item, index, details}) => {
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
      {details && (
        <View>
          <Text style={styles.bookNameStyle}>Laborum essepter</Text>
          <Text style={styles.authorNameStyle}>George Perry</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

function HorizontalSmallBooksList(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{props.title}</Text>
      <FlatList
        horizontal
        data={list}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
          <RenderItem item={item} index={index} details={props.details} />
        )}
      />
    </View>
  );
}

export default HorizontalSmallBooksList;
