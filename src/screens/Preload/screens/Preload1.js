import React from 'react';

import {View, Text, FlatList} from 'react-native';
import QuestionCheckBox from '../../../components/CheckBoxes/QuestionCheckBox';
import {DefaultButton} from '../../../components/Buttons';

import styles from '../styles';

export default function Preload({navigation}) {
  const choices = [
    {id: 0, title: 'Men'},
    {id: 1, title: 'Women'},
    {id: 2, title: 'Both'},
  ];

  const onPressNext = () => {
    navigation.navigate('Preload2');
  };

  return (
    <View style={styles.renderScreenContainer}>
      <Text style={styles.question}>Do you prefer books written for:</Text>
      <View>
        <FlatList
          data={choices}
          renderItem={(choice) => (
            <QuestionCheckBox choice={choice} onPress={() => {}} />
          )}
          keyExtractor={(item, index) => index.toString()}
        />

        <DefaultButton title={'Next'} onPress={onPressNext} />
      </View>
    </View>
  );
}
