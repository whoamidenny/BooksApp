import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';

import styles from './styles';

const RenderTagItem = ({item, index, onPressTag}) => {
  return (
    <TouchableOpacity style={styles.tagItemContainer}>
      <Text style={styles.titleStyle}>{item.name}</Text>
    </TouchableOpacity>
  );
};

function WrapTagsList(props) {
  return (
    <View style={styles.tagsContainer}>
      <FlatList
        horizontal
        data={props.data}
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
