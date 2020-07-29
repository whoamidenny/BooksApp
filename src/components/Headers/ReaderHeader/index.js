import React, {useState} from 'react';

import {
  View,
  Text,
  Image,
  Modal,
  SafeAreaView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {Icon} from 'react-native-elements';
import Slider from 'react-native-slider';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import styles from './styles';
import {scaledSize} from '../../../styles';

import {images} from '../../../constants';

function ReaderHeader({title, rightTitle}) {
  const [modalVisible, setModalVisible] = useState(false);

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
        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
          <Image
            source={theme.$theme === 'light' ? images.cog : images.cog_b}
            style={styles.headerIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <Modal visible={modalVisible} transparent>
        <View style={styles.modalContainer}>
          <TouchableOpacity
            onPress={() => setModalVisible(!modalVisible)}
            style={{
              flex: 1,
            }}
          />
          <View style={styles.content}>
            <SafeAreaView style={styles.modalContent}>
              <View style={styles.row}>
                <Icon name="sunny-outline" type="ionicon" color={theme.$icon} />
                <View style={styles.centerBlock}>
                  <Slider
                    maximumTrackTintColor="#e2eff9"
                    minimumTrackTintColor="#df9964"
                    thumbTintColor="#df9964"
                    thumbStyle={styles.thumbStyle}
                  />
                </View>
                <Icon name="sunny" type="ionicon" color={theme.$icon} />
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>Background color</Text>
                <View style={styles.row}>
                  <View style={[styles.picker, styles.pickerLeft]} />
                  <View style={styles.picker} />
                </View>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>Font</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={styles.fontPicker}>Circe</Text>
                  <Icon
                    name="chevron-forward"
                    type="ionicon"
                    color={theme.$icon}
                    size={scaledSize(40)}
                  />
                </View>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>Font size</Text>
                <View style={styles.fontBlock}>
                  <Text style={[styles.label, {fontSize: scaledSize(30)}]}>
                    Aa
                  </Text>

                  <View style={{flex: 1, justifyContent: 'center'}}>
                    <View style={styles.lBlock}>
                      <Text style={styles.lText}>Small</Text>
                      <Text style={styles.lText}>Normal</Text>
                      <Text style={styles.lText}>Large</Text>
                    </View>

                    <View style={styles.labelBlock}>
                      <View style={styles.smallRound} />
                      <View style={styles.smallRound} />
                      <View style={styles.smallRound} />
                      <View style={styles.smallRound} />
                      <View style={styles.smallRound} />
                    </View>

                    <Slider
                      step={0.1}
                      minimumValue={0}
                      maximumValue={5}
                      maximumTrackTintColor="#df9964"
                      minimumTrackTintColor="#df9964"
                      thumbTintColor="#df9964"
                      thumbStyle={styles.thumbStyle}
                      style={styles.fontSliderBlock}
                    />
                  </View>

                  <Text style={[styles.label, {fontSize: scaledSize(42)}]}>
                    Aa
                  </Text>
                </View>
              </View>
            </SafeAreaView>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default ReaderHeader;
