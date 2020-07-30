import React, {useState} from 'react';
import {View, SafeAreaView, Text} from 'react-native';
import {SearchInput} from '../../Inputs';

import styles from './styles';
import {Avatar, Icon} from 'react-native-elements';
import {scaledSize} from '../../../styles';

function HomeHeader(props) {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.block}>
          <View>
            <Text style={styles.usernameStyle}>Hello, Jane Doe</Text>
            <Text style={styles.headerStyle}>The best books for you</Text>
          </View>
          <Avatar
            size={scaledSize(130)}
            rounded
            source={
              props.source
                ? props.source
                : require('../../../assets/images/avatarPlaceholder.png')
            }
          />
        </View>
        <View style={styles.block}>
          <SearchInput />
          <Icon
            name="tune"
            type="material-community"
            color="white"
            size={scaledSize(70)}
            containerStyle={styles.settingsIconContainer}
            onPress={() => props.navigation.navigate('Filters')}
          />
        </View>
      </SafeAreaView>
    </View>
  );
}

export default HomeHeader;
