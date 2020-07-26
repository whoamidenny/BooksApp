import React from 'react';

import {View, Text, FlatList} from 'react-native';
import {MainBlock} from '../../components/Blocks';

import styles from './styles';

const notifications = [
  {
    id: 0,
    title: 'New Book by Oliver Knight',
    description:
      'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo et quasi architecto beatae vitae sunt, explicabo. ',
  },
  {
    id: 1,
    title: 'New genre: Autobiography',
    description:
      'Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus',
  },
];

function Profile({navigation}) {
  return (
    <MainBlock>
      <FlatList
        data={notifications}
        renderItem={({item}) => (
          <View style={styles.messageContainer}>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
          </View>
        )}
      />
    </MainBlock>
  );
}

export default Profile;
