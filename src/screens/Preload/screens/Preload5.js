import React from 'react';

import {View, Text, FlatList} from 'react-native';
import QuestionCheckBox from '../../../components/CheckBoxes/QuestionCheckBox';
import {DefaultButton} from '../../../components/Buttons';

import {useSelector, useDispatch} from 'react-redux';
import {selectViolence, filtersActions} from '../../../redux/filters';

import styles from '../styles';

export default function Preload({navigation}) {
  const violence = useSelector((state) => selectViolence(state));
  const dispatch = useDispatch();

  const choices = [
    {id: 0, title: 'Yes'},
    {id: 1, title: 'No'},
  ];

  const onPressNext = () => {
    navigation.navigate('Preload6');
  };

  const onPressItem = (item) => {
    dispatch(filtersActions.setFilterValue('violence', item));
  };

  return (
    <View style={styles.renderScreenContainer}>
      <Text style={styles.question}>Are you okay with violence in books?</Text>
      <View>
        <FlatList
          data={choices}
          renderItem={(choice) => {
            const isChecked = violence.id === choice.item.id;
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
