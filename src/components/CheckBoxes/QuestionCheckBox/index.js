import React from 'react';
import {View, Text} from 'react-native';
import CheckedIcon from '../../../assets/images/check.svg';
import UncheckedIcon from '../../../assets/images/uncheck.svg';

import {scaledSize} from '../../../styles';

import styles from './styles';

const QuestionCheckBox = ({title, checked}) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    {checked ? (
      <CheckedIcon width={scaledSize(101)} height={scaledSize(101)} />
    ) : (
      <UncheckedIcon width={scaledSize(101)} height={scaledSize(101)} />
    )}
  </View>
);

export default QuestionCheckBox;
