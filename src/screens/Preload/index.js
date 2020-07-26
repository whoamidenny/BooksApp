import React, {Component} from 'react';

import {View, FlatList, SafeAreaView} from 'react-native';

import styles from './styles';

class Preload extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.container}></SafeAreaView>
      </View>
    );
  }
}

export default Preload;
