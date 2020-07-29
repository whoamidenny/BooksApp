import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';

import styles from './styles';

const RenderTagItem = ({item, index, onPressTag}) => {
  return (
    <TouchableOpacity style={styles.tagItemContainer}>
      <Text style={styles.titleStyle}>{item.title}</Text>
    </TouchableOpacity>
  );
};

function WrapTagsList(props) {
  const [tagsList, setTagsList] = useState([
    {id: 0, title: 'Crime'},
    {id: 1, title: 'Classics'},
    {id: 2, title: 'Thrillers'},
    {id: 3, title: 'Hispanic & Latino'},
  ]);
  return (
    <View style={styles.tagsContainer}>
      <FlatList
        horizontal
        data={tagsList}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
        renderItem={({item, index}) => (
          <RenderTagItem item={item} index={index} />
        )}
      />
    </View>
  );
}

export default WrapTagsList;
