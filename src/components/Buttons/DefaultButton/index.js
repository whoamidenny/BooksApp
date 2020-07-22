import React from 'react';
import {Button} from 'react-native-elements';

import styles from './styles';

const DefaultButton = ({...props}) => (
  <Button
    {...props}
    titleStyle={styles.btnTitle}
    buttonStyle={styles.btnContainer}
    containerStyle={[styles.containerStyle, props.containerStyle]}
  />
);

export default DefaultButton;
