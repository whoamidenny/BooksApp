import React, {useState} from 'react';

import {View, Text, Image, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {BaseBlock} from '../../components/Blocks';
import {SmallButton} from '../../components/Buttons';
import {HorizontalSmallBooksList, WrapTagsList} from '../../components/Lists';

import styles from './styles';
import {DefaultHeader} from '../../components/Headers';
import {scaledSize} from '../../styles';
import {Icon} from 'react-native-elements';
import {colors} from '../../constants';

function Author({navigation}) {
  const [readMore, setReadMore] = useState(false);
  return (
    <BaseBlock>
      <DefaultHeader title="Oliver Knight" />
      <ScrollView style={styles.containerStyle}>
        <View style={styles.topBlock}>
          <Image
            style={styles.imageBookStyle}
            source={{
              uri: 'https://i.redd.it/ve1x6jg1i9q31.jpg',
            }}
          />
          <View style={{flex: 1}}>
            <View style={styles.blockContainerStyle}>
              <View>
                <Text style={styles.bookNameStyle}>Oliver Knight</Text>
                <Text style={styles.bookAuthorNameStyle}>35k subscribers</Text>
              </View>
              <Icon
                name="bell"
                type="feather"
                color={colors.checkBoxIcon}
                size={scaledSize(70)}
              />
            </View>

            <View style={styles.tagsContainer}>
              <Text style={styles.bookAuthorNameStyle}>Genre:</Text>
              <WrapTagsList />
            </View>
          </View>
        </View>
        <View style={styles.introductionContainer}>
          <Text style={styles.introductionTitleStyle}>Biography</Text>
          <View>
            <Text
              numberOfLines={readMore ? null : 10}
              style={styles.introductionTextStyle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum. Nemo enim
              ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut
              fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum. Nemo enim
              ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut
              fugit.
            </Text>
            {!readMore && (
              <LinearGradient
                colors={['rgba(241, 249, 255, 0.1)', 'rgba(241, 249, 255, 1)']}
                style={styles.linearGradient}
              />
            )}
          </View>
          <View style={{alignItems: 'center', marginTop: 10}}>
            <SmallButton
              onPress={() => setReadMore(!readMore)}
              title={readMore ? 'Less' : 'Read more'}
            />
          </View>
        </View>

        <HorizontalSmallBooksList details title="Oliver Knight books" />
      </ScrollView>
    </BaseBlock>
  );
}

export default Author;
