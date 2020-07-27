import React, {Component} from 'react';
import {View, FlatList, SafeAreaView, Text, Dimensions} from 'react-native';
import * as Progress from 'react-native-progress';
import QuestionCheckBox from '../../components/CheckBoxes/QuestionCheckBox';
import {DefaultButton} from '../../components/Buttons';
import {translate} from '../../i18n';
import styles from './styles';
import {colors} from '../../constants';
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
    const {currentScreenIndex, screens} = this.state;

    currentScreenIndex < screens.length - 1
      ? (this.flatList.scrollToIndex({
          animated: true,
          index: currentScreenIndex + 1,
        }),
        this.setState({
          currentScreenIndex: currentScreenIndex + 1,
        }),
        this.setProgress())
      : null;
  };

  setProgress = () => {
    const {screens, currentScreenIndex} = this.state;
    const onePercent = screens.length / 100;
    const currentPercent = (currentScreenIndex + 2) / onePercent;
    this.setState({
      progress: Number(
        currentPercent >= 100 ? 1 : '0.' + currentPercent.toFixed(0),
        10,
      ),
      currentPercent: currentPercent.toFixed(0),
    });
  };

  render() {
    const {screens, currentScreenIndex, progress, currentPercent} = this.state;
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.container}>
          <View style={styles.content}>
            <View style={styles.topProgressContainer}>
              {progress > 0 && (
                <View>
                  <Progress.Bar
                    progress={progress}
                    width={Dimensions.get('screen').width - 60}
                    style={styles.progressBarStyle}
                    unfilledColor={colors.progressBarBorderColor}
                    borderColor={colors.progressBarBorderColor}
                    color={colors.progressBarColor}
                  />
                  <Text style={styles.percentageTextStyle}>
                    ({currentPercent}% ready)
                  </Text>
                </View>
              )}
            </View>
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
                        onPress={(choseId) => this.setSelection(index, choseId)}
                      />
                    )}
                  />
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
            <View style={styles.bottomButtonsContainer}>
              {currentScreenIndex === 1 && (
                <DefaultButton
                  title={translate('Discover')}
                  //onPress={this.onPressNext}
                  buttonStyle={styles.buttonDiscoverStyle}
                  containerStyle={styles.buttonContainerStyle}
                />
              )}
              <DefaultButton
                title={translate('Next')}
                onPress={this.onPressNext}
                containerStyle={styles.buttonContainerStyle}
              />
            </View>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

export default Preload;
