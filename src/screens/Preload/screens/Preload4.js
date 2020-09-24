import React from 'react';

import {View, Text, FlatList} from 'react-native';
import QuestionCheckBox from '../../../components/CheckBoxes/QuestionCheckBox';
import {DefaultButton} from '../../../components/Buttons';

import {useSelector, useDispatch} from 'react-redux';
import {selectTense, filtersActions} from '../../../redux/filters';

import styles from '../styles';

export default function Preload({navigation}) {
  const tense = useSelector((state) => selectTense(state));
  const dispatch = useDispatch();

  const choices = [
    {id: 0, name: 'Past tense: She ran to the store', value: 0},
    {id: 1, name: 'Present tense: She runs to the store', value: 1},
    {id: 2, name: 'Future tense: She will run to the store', value: 2},
  ];

  const onPressNext = () => {
    navigation.navigate('Preload5');
  };

  const onPressItem = (item) => {
    dispatch(filtersActions.setFilterValue('tense', item));
  };

  return (
    <View style={styles.renderScreenContainer}>
      <Text style={styles.question}>What tense do you prefer:</Text>
      <View>
        <FlatList
          data={choices}
          renderItem={(choice) => {
            const isChecked = tense.id === choice.item.id;
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
        <View style={styles.bottomContainer}>
          <DefaultButton
            title={'Next'}
            onPress={onPressNext}
            containerStyle={{flex: 1}}
          />
        </View>
      </View>
    </View>
  );
}
