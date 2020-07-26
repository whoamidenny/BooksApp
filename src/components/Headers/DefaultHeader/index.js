import React from 'react';

import {View, Text} from 'react-native';
import {Icon} from 'react-native-elements';

import styles from './styles';
import {scaledSize} from '../../../styles';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

function DefaultHeader({title}) {
  const theme = useSelector((state) => state.theme);
  const navigation = useNavigation();

  function onPressBack() {
    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>
      <View>
        <Icon
          name="chevron-left"
          type="fontawesome"
          size={scaledSize(90)}
          color={theme.$backButton}
          onPress={onPressBack}
        />
      </View>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View>
        <Text style={styles.rightText}>SAVE</Text>
      </View>
    </View>
  );
}

export default DefaultHeader;
