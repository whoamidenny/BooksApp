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
        {item.title}
      </Text>
    </TouchableOpacity>
  );
};

function HorizontalTagsList(props) {
  const [tagsList, setTagsList] = useState([
    {id: 0, title: 'Thrillers'},
    {id: 1, title: 'Thrillers', selected: true},
    {id: 2, title: 'Thrillers'},
    {id: 3, title: 'Thrillers'},
    {id: 4, title: 'Thrillers'},
  ]);
  const onPressTag = (index) => {
    const newSelected = tagsList.map((item) => {
      if (item.id === index) {
        return {
          ...item,
          selected: !item.selected,
        };
      } else {
        return {
          ...item,
        };
      }
    });
    setTagsList(newSelected);
  };
  return (
    <View style={styles.tagsContainer}>
      <FlatList
        horizontal
        data={tagsList}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
          <RenderTagItem
            item={item}
            index={index}
            onPressTag={() => onPressTag(index)}
          />
        )}
      />
    </View>
  );
}

export default HorizontalTagsList;
