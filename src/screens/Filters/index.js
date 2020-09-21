import React, {useEffect, useState} from 'react';

import {View, Text, FlatList} from 'react-native';

import {FiltersHeader} from '../../components/Headers';

import styles from './styles';
import QuestionCheckBox from '../../components/CheckBoxes/QuestionCheckBox';
import {scaledSize} from '../../styles';

import {selectGenres, catalogActions} from '../../redux/catalog';
import {selectFilterGenres, filtersActions} from '../../redux/filters';
import {useDispatch, useSelector} from 'react-redux';

import {getFormattedList, isExistInArray} from '../../utils';

function Filters({navigation}) {
  const genresList = useSelector((state) => selectGenres(state));
  const genres = useSelector((state) => selectFilterGenres(state));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(catalogActions.getGenres());
  }, []);

  const onSelectElement = (list, element, isSelected) => {
    const array = getFormattedList(list, element, isSelected);

    dispatch(filtersActions.setFilterValue('genres', array));
  };

  return (
    <View style={styles.container}>
      <FiltersHeader navigation={navigation} />
      <FlatList
        data={genresList}
        renderItem={(choice) => {
          const isExist = isExistInArray(genres, choice.item);
          return (
            <QuestionCheckBox
              choice={choice}
              checked={isExist}
              onPress={() => onSelectElement(genres, choice.item, isExist)}
            />
          );
        }}
        contentContainerStyle={{padding: scaledSize(80)}}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

export default Filters;
