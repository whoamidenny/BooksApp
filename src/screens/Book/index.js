import React, {useEffect, useState} from 'react';

import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import * as Progress from 'react-native-progress';
import {BaseBlock} from '../../components/Blocks';
import {SmallButton} from '../../components/Buttons';
import {HorizontalSmallBooksList, WrapTagsList} from '../../components/Lists';

import styles from './styles';
import {DefaultHeader} from '../../components/Headers';
import {scaledSize} from '../../styles';
import {Icon} from 'react-native-elements';
import {colors, staticStrings} from '../../constants';
import {useSelector, useDispatch} from 'react-redux';
import {selectBooks, selectGenres} from '../../redux/catalog';

function Book({navigation, route}) {
  const [progress, setProgress] = useState(0.4);
  const {bookIndex} = route.params;
  const dispatch = useDispatch();

  const theme = useSelector((state) => state.theme);
  const books = useSelector((state) => selectBooks(state));
  const genres = useSelector((state) => selectGenres(state));

  const currentBookData = books[bookIndex];
  const currentBookGenres = [];

  const findCurrentBookGenres = () => {
    currentBookData.genres.forEach((item) => {
      const res = genres.find((genre) => genre.id === item);
      currentBookGenres.push(res);
    });
  };
  useEffect(() => {
    findCurrentBookGenres();
  }, []);

  return (
    <BaseBlock>
      <StatusBar
        barStyle={theme.$theme === 'light' ? 'dark-content' : 'light-content'}
        backgroundColor={theme.$background}
      />
      <DefaultHeader title="Library" />
      <ScrollView style={styles.containerStyle}>
        <View style={styles.topBlock}>
          <Image
            style={styles.imageBookStyle}
            source={{
              uri: `${
                staticStrings.apiEndpoint + '/' + currentBookData.imagePath
              }`,
            }}
          />
          <View style={{flex: 1}}>
            <View style={styles.blockContainerStyle}>
              <View>
                <Text style={styles.bookNameStyle}>
                  {currentBookData.title}
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Author')}>
                  <Text style={styles.bookAuthorNameStyle}>
                    by {currentBookData.additionalAuthor}
                  </Text>
                </TouchableOpacity>
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
              <Icon
                name="eye"
                type="feather"
                size={scaledSize(40)}
                color={theme.$label}
              />
              <Text style={styles.views}>{currentBookData.bookAuditory}</Text>
            </View>
            <View style={styles.tagsContainer}>
              <WrapTagsList data={currentBookGenres} />
            </View>
            <View>
              <SmallButton title="Read" />
            </View>
          </View>
        </View>
        <View style={styles.introductionContainer}>
          <Text style={styles.introductionTitleStyle}>Introduction</Text>
          <Text style={styles.introductionTextStyle}>
            {currentBookData.description}
          </Text>
        </View>

        <HorizontalSmallBooksList
          details
          title={`Other books by ${currentBookData.additionalAuthor}`}
        />
      </ScrollView>
    </BaseBlock>
  );
}

export default Book;
