import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';

import styles from './styles';

const RenderTagItem = ({item, index, onPressTag}) => {
  return (
    <TouchableOpacity
      onPress={onPressTag}
      style={
        item.selected
          ? [styles.tagItemContainer, styles.tagSelected]
          : styles.tagItemContainer
      }>
      <Text style={!item.selected ? styles.category : styles.categorySelected}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};

function HorizontalTagsList(props) {
  return (
    <View style={styles.tagsContainer}>
      <FlatList
        horizontal
        data={props.data}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
          <RenderTagItem
            item={item}
            index={index}
            onPressTag={() => props.onPress(index)}
          />
        )}
      />
    </View>
  );
}

export default HorizontalTagsList;
