import React from 'react';

import {View, Text, FlatList} from 'react-native';
import QuestionCheckBox from '../../../components/CheckBoxes/QuestionCheckBox';
import {DefaultButton} from '../../../components/Buttons';

import styles from '../styles';
import {colors} from '../../../constants';
import {scaledSize} from '../../../styles';

export default function Preload({navigation}) {
  const choices = [
    {id: 0, title: 'Men'},
    {id: 1, title: 'Women'},
    {id: 2, title: 'Both (Multiple protagonists)'},
  ];

  const onPressNext = () => {
    navigation.navigate('Preload3');
  };

  const onPressDiscover = () => {};

  return (
    <View style={styles.renderScreenContainer}>
      <Text style={styles.question}>
        Do you like books where the protagonist is:
      </Text>
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
