import React, {useState} from 'react';

import {View, Text, FlatList, Image, ScrollView} from 'react-native';
import * as Progress from 'react-native-progress';
import {BaseBlock} from '../../components/Blocks';
import {SmallButton} from '../../components/Buttons';
import {HorizontalSmallBooksList, WrapTagsList} from '../../components/Lists';

import styles from './styles';
import {DefaultHeader} from '../../components/Headers';
import {scaledSize} from '../../styles';
import {Icon} from 'react-native-elements';
import {colors} from '../../constants';

function Book({navigation}) {
  const [progress, setProgress] = useState(0.4);
  return (
    <BaseBlock>
      <DefaultHeader title="Library" />
      <ScrollView style={styles.containerStyle}>
        <View style={styles.topBlock}>
          <Image
            style={styles.imageBookStyle}
            source={{
              uri:
                'https://images-na.ssl-images-amazon.com/images/I/91RuWUOAhbL.jpg',
            }}
          />
          <View style={{flex: 1}}>
            <View style={styles.blockContainerStyle}>
              <View>
                <Text style={styles.bookNameStyle}>Comodo exepturi</Text>
                <Text style={styles.bookAuthorNameStyle}>
                  by Oliver Knight{' '}
                </Text>
              </View>
              <Icon
                name="bookmark-outline"
                type="ionicon"
                color={colors.checkBoxIcon}
                size={scaledSize(70)}
              />
            </View>
            <View style={styles.blockContainerStyle}>
              <Progress.Bar
                progress={progress}
                width={scaledSize(432)}
                unfilledColor={colors.progressBarBorderColor}
                borderColor={colors.progressBarBorderColor}
                color={colors.progressBarColor}
                height={scaledSize(12)}
                style={{height: scaledSize(12)}}
              />
              <Icon name="eye" type="feather" size={scaledSize(40)} />
              <Text>10k</Text>
            </View>
            <View style={styles.tagsContainer}>
              <WrapTagsList />
            </View>
            <View>
              <SmallButton title="Read" />
            </View>
          </View>
        </View>
        <View style={styles.introductionContainer}>
          <Text style={styles.introductionTitleStyle}>Introduction</Text>
          <Text style={styles.introductionTextStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur occaecat cupidatat non proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum. Nemo enim ipsam
            voluptatem, quia voluptas sit, aspernatur aut odit aut fugit.
          </Text>
        </View>

        <HorizontalSmallBooksList
          details
          title="Other books by Oliver Knight"
        />
      </ScrollView>
    </BaseBlock>
  );
}

export default Book;
