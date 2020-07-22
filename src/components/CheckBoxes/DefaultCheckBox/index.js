import React from 'react';

import {CheckBox} from 'react-native-elements';
import styles from './styles';
import {scaledSize} from '../../../styles';

const DefaultCheckBox = ({...props}) => (
  <CheckBox
    {...props}
    checkedIcon="check-box-outline"
    uncheckedIcon="checkbox-blank-outline"
    iconType="material-community"
    checkedColor="#ea9e6c"
    size={scaledSize(80)}
    textStyle={styles.text}
    containerStyle={styles.container}
  />
);

export default DefaultCheckBox;
