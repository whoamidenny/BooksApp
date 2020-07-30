import React, {useState} from 'react';

import {View, Text, FlatList} from 'react-native';

import {FiltersHeader} from '../../components/Headers';

import styles from './styles';
import QuestionCheckBox from '../../components/CheckBoxes/QuestionCheckBox';
import {scaledSize} from '../../styles';

function Filters({navigation}) {
  const [categories, setCategories] = useState([
    {id: 0, title: 'Action & Adventure', checked: false},
    {id: 1, title: 'African American', checked: true},
    {id: 2, title: 'Alternative History'},
    {id: 3, title: 'Amish & Mennonite'},
  ]);
  return (
    <View style={styles.container}>
      <FiltersHeader navigation={navigation} />
      <FlatList
        data={categories}
        renderItem={(item) => (
          <QuestionCheckBox
            choice={item}
            onPress={() => {}}
            titleStyle={styles.title}
            iconStyle={styles.icon}
          />
        )}
        contentContainerStyle={{padding: scaledSize(80)}}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

export default Filters;
