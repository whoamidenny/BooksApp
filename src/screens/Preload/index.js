import React, {Component} from 'react';
import {View, FlatList, SafeAreaView, Text, Dimensions} from 'react-native';
import * as Progress from 'react-native-progress';
import QuestionCheckBox from '../../components/CheckBoxes/QuestionCheckBox';
import {DefaultButton} from '../../components/Buttons';
import styles from './styles';
import {colors} from '../../constants';
import {scaledSize} from '../../styles';

class Preload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentScreenIndex: 0,
      progress: 0,
      currentPercent: 0,
      screens: [
        {
          id: 0,
          title: 'Book Finder',
          subtitle:
            'Hello! We want to make sure we find books that you will love to read, please answer the following questions so that we can pick a great book for you!',
          question: 'Do you prefer books written for:',
          choices: [
            {id: 0, title: 'Men'},
            {id: 1, title: 'Women'},
            {id: 2, title: 'Both'},
          ],
        },
        {
          id: 1,
          title: null,
          subtitle: null,
          question: 'Do you like books where the protagonist is:',
          choices: [
            {id: 0, title: 'Men'},
            {id: 1, title: 'Women'},
            {id: 2, title: 'Both (Multiple protagonists)'},
          ],
        },
        {
          id: 2,
          title: null,
          subtitle: null,
          question: 'Which Point of View do you prefer:',
          choices: [
            {id: 0, title: 'First (I did this)'},
            {id: 1, title: 'Second (You did this)'},
            {id: 2, title: 'Third-Limited (They did this)'},
            {id: 3, title: 'Third-Omniscient (They didn’t know this)'},
          ],
        },
        {
          id: 3,
          title: null,
          subtitle: null,
          question: 'What tense do you prefer:',
          choices: [
            {id: 0, title: 'Past tense: She ran to the store'},
            {id: 1, title: 'Present tense: She runs to the store'},
            {id: 2, title: 'Future tense: She will run to the store'},
          ],
        },
        {
          id: 4,
          title: null,
          subtitle: null,
          question: 'Are you okay with violence in books?',
          choices: [
            {id: 0, title: 'Yes'},
            {id: 1, title: 'No'},
          ],
        },
        {
          id: 5,
          title: null,
          subtitle: null,
          question: 'Are you okay with explicit language in books?',
          choices: [
            {id: 0, title: 'Yes'},
            {id: 1, title: 'No'},
          ],
        },
        {
          id: 6,
          title: null,
          subtitle: null,
          question: 'Are you okay with explicit /detailed sex scenes?',
          choices: [
            {id: 0, title: 'Yes'},
            {id: 1, title: 'No'},
          ],
        },
        {
          id: 7,
          title: null,
          subtitle: null,
          question:
            'Please choose 10 of the following Genres you prefer to read:',
          choices: [
            {id: 0, title: 'Action & Adventure'},
            {id: 1, title: 'African American'},
            {id: 2, title: 'Alternative History'},
            {id: 3, title: 'Amish & Mennonite'},
          ],
        },
      ],
    };
  }

  setSelection = (screenId, choseId) => {
    const init = this.state.screens;
    const currentScreenChoices = init.find((item) => item.id === screenId)
      .choices;
    const newCurrentScreenChoices = currentScreenChoices.map((item) => {
      if (item.id === choseId) {
        return {
          ...item,
          checked: true,
        };
      } else {
        return {
          ...item,
          checked: false,
        };
      }
    });
    const newScreensData = init.map((item) => {
      if (item.id === screenId) {
        return {
          ...item,
          choices: newCurrentScreenChoices,
        };
      } else {
        return {
          ...item,
        };
      }
    });
    this.setState({
      screens: newScreensData,
    });
  };

  onPressNext = () => {
    const {currentScreenIndex} = this.state;
    const {navigation} = this.props;

    if (currentScreenIndex === 7) {
      navigation.navigate('Home');
    } else {
      this.flatList.scrollToIndex({
        index: currentScreenIndex + 1,
        animated: true,
      });
    }
  };

  onViewableItemsChanged = ({viewableItems, changed}) => {
    const {screens} = this.state;
    const visibleIndex = viewableItems[0].index;

    this.setState({
      currentScreenIndex: visibleIndex,
      progress: (visibleIndex + 1) / screens.length,
    });
  };

  render() {
    const {screens, currentScreenIndex, progress, currentPercent} = this.state;
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.container}>
          <View style={styles.content}>
            {currentScreenIndex !== 0 ? (
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
            ) : null}
            <View style={{flex: 1}}>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                ref={(flatList) => (this.flatList = flatList)}
                data={screens}
                renderItem={({item, index}) => (
                  <View style={styles.renderScreenContainer}>
                    {currentScreenIndex === 0 && (
                      <View>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.subtitle}>{item.subtitle}</Text>
                      </View>
                    )}

                    <Text style={styles.question}>{item.question}</Text>
                    <FlatList
                      data={item.choices}
                      renderItem={(choice) => (
                        <QuestionCheckBox
                          choice={choice}
                          onPress={(choseId) =>
                            this.setSelection(index, choseId)
                          }
                        />
                      )}
                    />
                  </View>
                )}
                onViewableItemsChanged={this.onViewableItemsChanged}
                viewabilityConfig={{
                  itemVisiblePercentThreshold: 50,
                }}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
            <View style={styles.bottomContainer}>
              {currentScreenIndex === 1 ? (
                <DefaultButton
                  title={'Discover'}
                  onPress={this.onPressNext}
                  buttonStyle={{backgroundColor: colors.progressBarColor}}
                  containerStyle={{flex: 1, marginRight: scaledSize(10)}}
                />
              ) : null}
              <DefaultButton
                title={currentScreenIndex === 7 ? 'Discover' : 'Next'}
                onPress={this.onPressNext}
                containerStyle={{flex: 1, marginLeft: scaledSize(10)}}
              />
            </View>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

export default Preload;
