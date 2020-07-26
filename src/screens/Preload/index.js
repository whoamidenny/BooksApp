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
  render() {
    const {screens} = this.state;
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.container}>
          <View style={styles.content}>
            <FlatList
              data={screens}
              renderItem={({item}) => (
                <View>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.subtitle}>{item.subtitle}</Text>
                  <Text style={styles.question}>{item.question}</Text>
                  <FlatList
                    data={item.choices}
                    renderItem={(choice) => (
                      <QuestionCheckBox
                        title={choice.item.title}
                        checked={false}
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
