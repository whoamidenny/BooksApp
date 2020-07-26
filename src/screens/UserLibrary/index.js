import React from 'react';

import {View, Text} from 'react-native';

import styles from './styles';
import {MainBlock} from '../../components/Blocks';

function UserLibrary({navigation}) {
  return (
    <MainBlock>
      <View>
        <Text>User Library</Text>
      </View>
    </MainBlock>
  );
}

export default UserLibrary;
