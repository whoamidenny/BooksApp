import React from 'react';

import {View, Text, FlatList} from 'react-native';
import QuestionCheckBox from '../../../components/CheckBoxes/QuestionCheckBox';
import {DefaultButton} from '../../../components/Buttons';

import {useSelector, useDispatch} from 'react-redux';
import {selectBooksWrittenFor, filtersActions} from '../../../redux/filters';

import styles from '../styles';

export default function Preload({navigation}) {
  const writtenFor = useSelector((state) => selectBooksWrittenFor(state));
  const dispatch = useDispatch();

  const choices = [
    {id: 0, title: 'Men'},
    {id: 1, title: 'Women'},
    {id: 2, title: 'Both'},
  ];

  const onPressNext = () => {
    navigation.navigate('Preload2');
  };

  const onPressItem = (item) => {
    dispatch(filtersActions.setFilterValue('booksWrittenFor', item));
  };

  return (
    <View style={styles.renderScreenContainer}>
      <Text style={styles.question}>Do you prefer books written for:</Text>
      <View>
        <FlatList
          data={choices}
          renderItem={(choice) => {
            const isChecked = writtenFor.id === choice.item.id;
            return (
              <QuestionCheckBox
                checked={isChecked}
                choice={choice}
                onPress={onPressItem}
              />
            );
          }}
          keyExtractor={(item, index) => index.toString()}
        />

        <DefaultButton title={'Next'} onPress={onPressNext} />
      </View>
    </View>
  );
}
