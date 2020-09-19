import React from 'react';
import {View, SafeAreaView, Text, ScrollView} from 'react-native';

import styles from './styles';

import {useSelector} from 'react-redux';

function ErrorBoundary({children}) {
  const {message, typeMessage, active} = useSelector((state) => state.error);

  const renderErrorMessage = () => {
    const SUCCESS = 'green';
    const ERROR = 'red';

    const getColor = () => {
      switch (typeMessage) {
        case 'error': {
          return {backgroundColor: ERROR};
        }
        case 'success': {
          return {backgroundColor: SUCCESS};
        }
        default:
          return {backgroundColor: ERROR};
      }
    };

    return (
      <SafeAreaView style={[styles.containerMessage, getColor()]}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[styles.messageContainer, getColor()]}>
          <Text style={styles.messageStyle}>{message}</Text>
        </ScrollView>
      </SafeAreaView>
    );
  };

  return (
    <View style={{flex: 1}}>
      {active ? renderErrorMessage() : null}

      {children}
    </View>
  );
}

export default ErrorBoundary;
