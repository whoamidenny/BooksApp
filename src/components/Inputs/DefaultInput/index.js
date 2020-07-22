import React from 'react';

import {Input} from 'react-native-elements';

import styles from './styles';

const DefaultInput = ({...props}) => (
  <Input
    {...props}
    renderErrorMessage={false}
    placeholderTextColor="#0b1e35"
    inputStyle={styles.inpStyle}
    inputContainerStyle={styles.inpContainer}
    containerStyle={styles.container}
  />
);

export default DefaultInput;
