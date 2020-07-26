import React, {Component} from 'react';

import {View, FlatList, SafeAreaView, Text} from 'react-native';

import styles from './styles';
import QuestionCheckBox from '../../components/CheckBoxes/QuestionCheckBox';

class Preload extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

  render() {
    const {screens} = this.state;
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.container}>
          <View style={styles.content}>
            <FlatList
              data={screens}
              renderItem={({item, index}) => (
                <View>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.subtitle}>{item.subtitle}</Text>
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
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

export default Preload;
