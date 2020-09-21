import React from 'react';

import {View, Text, FlatList} from 'react-native';
import QuestionCheckBox from '../../../components/CheckBoxes/QuestionCheckBox';
import {DefaultButton} from '../../../components/Buttons';

import styles from '../styles';
import {scaledSize} from '../../../styles';

export default function Preload({navigation}) {
  const choices = [
    {id: 0, name: 'First (I did this)'},
    {id: 1, name: 'Second (You did this)'},
    {id: 2, name: 'Third-Limited (They did this)'},
    {id: 3, name: 'Third-Omniscient (They didn’t know this)'},
  ];

  const onPressNext = () => {
    navigation.navigate('Preload4');
  };

  return (
    <View style={styles.renderScreenContainer}>
      <Text style={styles.question}>Which Point of View do you prefer:</Text>
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
