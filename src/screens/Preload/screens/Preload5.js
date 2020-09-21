import React from 'react';

import {View, Text, FlatList} from 'react-native';
import QuestionCheckBox from '../../../components/CheckBoxes/QuestionCheckBox';
import {DefaultButton} from '../../../components/Buttons';

import styles from '../styles';

export default function Preload({navigation}) {
  const choices = [
    {id: 0, title: 'Yes'},
    {id: 1, title: 'No'},
  ];

  const onPressNext = () => {
    navigation.navigate('Preload6');
  };

  return (
    <View style={styles.renderScreenContainer}>
      <Text style={styles.question}>Are you okay with violence in books?</Text>
      <View>
        <FlatList
          data={choices}
          renderItem={(choice) => (
            <QuestionCheckBox choice={choice} onPress={() => {}} />
          )}
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
