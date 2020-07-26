import React from 'react';
import {CheckBox, Icon} from 'react-native-elements';
import styles from './styles';
import {colors} from '../../../constants';
import {View, Text} from 'react-native';

const QuestionCheckBox = ({choice, onPress}) => (
  <View style={styles.container}>
    <Text style={styles.title}>{choice.item.title}</Text>
    <CheckBox
      containerStyle={styles.checkBoxContainerStyle}
      wrapperStyle={styles.checkBoxWrapperStyle}
      checkedIcon={
        <Icon
          name="check-bold"
          type="material-community"
          color={colors.checkBoxIcon}
        />
      }
      uncheckedIcon={null}
      size={40}
      checked={choice.item.checked}
      onPress={() => onPress(choice.item.id)}
    />
  </View>
);

export default QuestionCheckBox;
