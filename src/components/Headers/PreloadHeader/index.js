import React, {useEffect} from 'react';

import {View, Text, Dimensions} from 'react-native';
import * as Progress from 'react-native-progress';

import styles from './styles';
import {colors} from '../../../constants';
import {scaledSize} from '../../../styles';

export default function PreloadHeader({title, subtitle, ...props}) {
  const {index} = props.state;

  return (
    <>
      {index === 0 ? (
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      ) : (
        <View style={styles.container}>
          <Progress.Bar
            progress={(index + 1) / 8}
            width={Dimensions.get('window').width - scaledSize(160)}
            style={styles.progressBarStyle}
            unfilledColor={colors.progressBarBorderColor}
            borderColor={colors.progressBarBorderColor}
            color={colors.progressBarColor}
          />
          <Text style={styles.percentageTextStyle}>
            {`${Math.round(((index + 1) / 8) * 100)}% ready`}
          </Text>
        </View>
      )}
    </>
  );
}
