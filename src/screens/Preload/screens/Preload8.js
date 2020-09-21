import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';

import QuestionCheckBox from '../../../components/CheckBoxes/QuestionCheckBox';

import {useDispatch, useSelector} from 'react-redux';
import {catalogActions, selectGenres} from '../../../redux/catalog';

import styles from '../styles';

export default function Preload() {
  const dispatch = useDispatch();
  const genres = useSelector((state) => selectGenres(state));

  useEffect(() => dispatch(catalogActions.getGenres()), []);

  console.log(genres);

  return (
    <View style={styles.renderScreenContainer}>
      <Text style={styles.question}>
        Please choose 10 of the following Genres you prefer to read:
      </Text>
      <FlatList
        data={genres}
        renderItem={(choice) => (
          <QuestionCheckBox choice={choice} onPress={() => {}} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}
