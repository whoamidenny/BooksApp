import React from 'react';
import {CheckBox, Icon} from 'react-native-elements';
import styles from './styles';
import {colors} from '../../../constants';
import {View, Text} from 'react-native';

const QuestionCheckBox = ({
  choice,
  checked,
  onPress,
  titleStyle,
  iconStyle,
}) => (
  <View style={styles.container}>
    <Text style={[styles.title, titleStyle]}>{choice.item.name}</Text>
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
      checked={checked}
      onPress={() => onPress(choice.item)}
    />
  </View>
);

export default QuestionCheckBox;
