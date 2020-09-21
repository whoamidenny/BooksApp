import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';

import QuestionCheckBox from '../../../components/CheckBoxes/QuestionCheckBox';
import {DefaultButton} from '../../../components/Buttons';

import {useDispatch, useSelector} from 'react-redux';
import {catalogActions, selectGenres} from '../../../redux/catalog';
import {selectFilterGenres, filtersActions} from '../../../redux/filters';

import {isExistInArray, getFormattedList} from '../../../utils';

import styles from '../styles';

export default function Preload({navigation}) {
  const dispatch = useDispatch();
  const genresList = useSelector((state) => selectGenres(state));
  const genres = useSelector((state) => selectFilterGenres(state));

  useEffect(() => dispatch(catalogActions.getGenres()), []);

  const onSelectElement = (list, element, isSelected) => {
    const array = getFormattedList(list, element, isSelected);

    dispatch(filtersActions.setFilterValue('genres', array));
  };

  const onPressNext = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.renderScreenContainer}>
      <Text style={styles.question}>
        Please choose 10 of the following Genres you prefer to read:
      </Text>
      <View>
        <FlatList
          data={genresList}
          renderItem={(choice) => {
            const isExist = isExistInArray(genres, choice.item);
            return (
              <QuestionCheckBox
                choice={choice}
                checked={isExist}
                onPress={() => onSelectElement(genres, choice.item, isExist)}
              />
            );
          }}
          keyExtractor={(item, index) => index.toString()}
        />
        <View style={styles.bottomContainer}>
          <DefaultButton
            title={'Discover'}
            onPress={onPressNext}
            containerStyle={{flex: 1}}
          />
        </View>
      </View>
    </View>
  );
}
