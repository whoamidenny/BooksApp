import React from 'react';

import {View, Text, Image, Modal} from 'react-native';
import {Icon} from 'react-native-elements';

import styles from './styles';
import {scaledSize} from '../../../styles';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {images} from '../../../constants';

function ReaderHeader({title, rightTitle}) {
  const theme = useSelector((state) => state.theme);
  const navigation = useNavigation();

  function onPressBack() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={{flex: 1, alignItems: 'flex-start'}}>
        <Icon
          name="chevron-left"
          type="fontawesome"
          size={scaledSize(90)}
          color={theme.$backButton}
          onPress={onPressBack}
        />
      </View>
      <View style={{alignItems: 'center', flex: 2}}>
        <Text style={styles.title}>{title.slice(0, 25)}...</Text>
      </View>
      <View style={styles.rightBlock}>
        <Image
          source={
            theme.$theme === 'light'
              ? images.add_bookmark
              : images.add_bookmark_b
          }
          style={styles.headerIcon}
          resizeMode="contain"
        />
        <Image
          source={theme.$theme === 'light' ? images.cog : images.cog_b}
          style={styles.headerIcon}
          resizeMode="contain"
        />
      </View>
      <Modal visible={true} transparent>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(255,255,255, 0.3)',
            justifyContent: 'flex-end',
          }}>
          <View style={{backgroundColor: 'red'}}>
            <Text>Background color</Text>
            <Text>Font</Text>
            <Text>Font size</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default ReaderHeader;
