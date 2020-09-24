import React from 'react';

import {View, Text, FlatList} from 'react-native';
import QuestionCheckBox from '../../../components/CheckBoxes/QuestionCheckBox';
import {DefaultButton} from '../../../components/Buttons';

import {useSelector, useDispatch} from 'react-redux';
import {selectProtagonist, filtersActions} from '../../../redux/filters';

import styles from '../styles';
import {colors} from '../../../constants';
import {scaledSize} from '../../../styles';

export default function Preload({navigation}) {
  const protagonist = useSelector((state) => selectProtagonist(state));
  const dispatch = useDispatch();

  const choices = [
    {id: 0, name: 'Men', value: 0},
    {id: 1, name: 'Women', value: 1},
    {id: 2, name: 'Both (Multiple protagonists)', value: 2},
  ];

  const onPressNext = () => {
    navigation.navigate('Preload3');
  };

  const onPressDiscover = () => {};

  const onPressItem = (item) => {
    dispatch(filtersActions.setFilterValue('protagonist', item));
  };

  return (
    <View style={styles.renderScreenContainer}>
      <Text style={styles.question}>
        Do you like books where the protagonist is:
      </Text>
      <View>
        <FlatList
          data={choices}
          renderItem={(choice) => {
            const isChecked = protagonist.id === choice.item.id;
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
            title={'Discover'}
            onPress={onPressDiscover}
            buttonStyle={{backgroundColor: colors.progressBarColor}}
            containerStyle={{flex: 1, marginRight: scaledSize(10)}}
          />

          <DefaultButton
            title={'Next'}
            onPress={onPressNext}
            containerStyle={{flex: 1, marginLeft: scaledSize(10)}}
          />
        </View>
      </View>
    </View>
  );
}
