import React from 'react';
import {Button} from 'react-native-elements';

import styles from './styles';

const DefaultButton = ({...props}) => (
  <Button
    {...props}
    titleStyle={styles.btnTitle}
    buttonContainer={styles.btnContainer}
    containerStyle={styles.containerStyle}
  />
);

export default DefaultButton;
