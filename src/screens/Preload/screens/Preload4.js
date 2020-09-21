import React from 'react';

import {View, Text, FlatList} from 'react-native';
import QuestionCheckBox from '../../../components/CheckBoxes/QuestionCheckBox';
import {DefaultButton} from '../../../components/Buttons';

import styles from '../styles';

export default function Preload({navigation}) {
  const choices = [
    {id: 0, name: 'Past tense: She ran to the store'},
    {id: 1, name: 'Present tense: She runs to the store'},
    {id: 2, name: 'Future tense: She will run to the store'},
  ];

  const onPressNext = () => {
    navigation.navigate('Preload5');
  };

  return (
    <View style={styles.renderScreenContainer}>
      <Text style={styles.question}>What tense do you prefer:</Text>
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
