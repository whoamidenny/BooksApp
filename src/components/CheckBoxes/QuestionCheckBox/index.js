import React from 'react';
import {CheckBox, Icon} from 'react-native-elements';
import styles from './styles';
import {colors} from '../../../constants';
import {View, Text} from 'react-native';
import {scaledSize} from '../../../styles';

const QuestionCheckBox = ({choice, onPress, titleStyle, iconStyle}) => (
  <View style={styles.container}>
    <Text style={[styles.title, titleStyle]}>{choice.item.title}</Text>
    <CheckBox
      containerStyle={styles.checkBoxContainerStyle}
      wrapperStyle={[styles.checkBoxWrapperStyle, iconStyle]}
      checkedIcon={
        <Icon
          name="check-bold"
          type="material-community"
          color={colors.checkBoxIcon}
        />
      }
      uncheckedIcon={null}
      checked={choice.item.checked}
      onPress={() => onPress(choice.item.id)}
    />
  </View>
);

export default QuestionCheckBox;
