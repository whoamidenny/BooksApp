import React from 'react';

import {View, Text, FlatList} from 'react-native';
import {MainBlock, BaseBlock} from '../../components/Blocks';

import styles from './styles';
import {DefaultHeader} from '../../components/Headers';
import {scaledSize} from '../../styles';

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
    <BaseBlock>
      <DefaultHeader title="Notifications" rightTitle="CLEAR" />
      <FlatList
        data={notifications}
        renderItem={({item}) => (
          <View style={styles.messageContainer}>
            <Text style={styles.messageTitle}>{item.title}</Text>
            <Text style={styles.messageDescription}>{item.description}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.notificationContainer}
      />
    </BaseBlock>
  );
}

export default Profile;
