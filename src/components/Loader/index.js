import React from 'react';

import {View, ActivityIndicator} from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$background',
  },
});

export default function Loader() {
  return (
    <View style={styles.containerStyle}>
      <ActivityIndicator size="large" color="red" />
    </View>
  );
}
