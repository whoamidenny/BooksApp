import React from 'react';
import {SafeAreaView, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import {scaledSize} from '../../../styles';

const MainBlock = ({children, blockContainer}) => (
  <View style={styles.container}>
    <SafeAreaView style={styles.container}>
      <View style={[styles.bContainer, blockContainer]}>{children}</View>
    </SafeAreaView>
  </View>
);

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '$background',
  },
  bContainer: {
    flex: 1,
    paddingHorizontal: scaledSize(82),
  },
});

export default MainBlock;
