import React, {useState} from 'react';
import {View, SafeAreaView, Text} from 'react-native';
import {SearchInput} from '../../Inputs';

import styles from './styles';
import {Icon} from 'react-native-elements';
import {scaledSize} from '../../../styles';

function FiltersHeader(props) {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.block}>
          <SearchInput />
          <Icon
            name="tune"
            type="material-community"
            color="white"
            size={scaledSize(70)}
            containerStyle={styles.settingsIconContainer}
            onPress={() => props.navigation.goBack()}
          />
        </View>
      </SafeAreaView>
    </View>
  );
}

export default FiltersHeader;
