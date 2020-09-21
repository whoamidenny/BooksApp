import React, {useContext, useState, useEffect} from 'react';

import {View, Text, Dimensions} from 'react-native';
import * as Progress from 'react-native-progress';

import {PreloadContext} from '../../../navigation/PreloadTab';

import styles from './styles';
import {colors} from '../../../constants';
import {scaledSize} from '../../../styles';

export default function PreloadHeader({title, subtitle}) {
  const {currentPage, setCurrentPage} = useContext(PreloadContext);
  const [progress, setProgress] = useState(currentPage);

  useEffect(() => {
    const percent = currentPage / 8;
    setProgress(percent);
    return () => {
      setCurrentPage(0);
    };
  }, [currentPage]);

  return (
    <>
      {currentPage === 0 ? (
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      ) : (
        <View style={styles.progressContainer}>
          <Progress.Bar
            progress={progress}
            width={Dimensions.get('window').width - scaledSize(160)}
            style={styles.progressBarStyle}
            unfilledColor={colors.progressBarBorderColor}
            borderColor={colors.progressBarBorderColor}
            color={colors.progressBarColor}
          />
          <Text style={styles.percentageTextStyle}>
            ({Math.round(progress * 100)}% ready)
          </Text>
        </View>
      )}
    </>
  );
}
