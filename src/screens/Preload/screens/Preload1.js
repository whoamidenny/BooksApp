import React from 'react';

import {View, Text, FlatList} from 'react-native';
import QuestionCheckBox from '../../../components/CheckBoxes/QuestionCheckBox';

import styles from '../styles';

export default function Preload() {
  const choices = [
    {id: 0, title: 'Men'},
    {id: 1, title: 'Women'},
    {id: 2, title: 'Both'},
  ];

  return (
    <View style={styles.renderScreenContainer}>
      <Text style={styles.question}>Do you prefer books written for:</Text>
      <View style={{flex: 1}}>
        <FlatList
          data={choices}
          renderItem={(choice) => (
            <QuestionCheckBox choice={choice} onPress={() => {}} />
          )}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{flexGrow: 1}}
        />
      </View>
    </View>
  );
}
