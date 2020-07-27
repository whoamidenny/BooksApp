import React from 'react';

import {View, SafeAreaView, Text} from 'react-native';

import {ReaderHeader} from '../../components/Headers';
import {BaseBlock} from '../../components/Blocks';

import styles from './styles';

function Reader() {
  return (
    <BaseBlock>
      <ReaderHeader title="Commodo exeputi" />
      <View>
        <Text></Text>
      </View>
    </BaseBlock>
  );
}

export default Reader;
