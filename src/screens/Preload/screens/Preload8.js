import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';

import QuestionCheckBox from '../../../components/CheckBoxes/QuestionCheckBox';

import {useDispatch} from 'react-redux';

import styles from '../styles';

export default function Preload() {
  const choices = [
    {id: 0, title: 'Action & Adventure'},
    {id: 1, title: 'African American'},
    {id: 2, title: 'Alternative History'},
    {id: 3, title: 'Amish & Mennonite'},
  ];

  return (
    <View style={styles.renderScreenContainer}>
      <Text style={styles.question}>
        Please choose 10 of the following Genres you prefer to read:
      </Text>
      <FlatList
        data={choices}
        renderItem={(choice) => (
          <QuestionCheckBox choice={choice} onPress={() => {}} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}
