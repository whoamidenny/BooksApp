import React, {Component} from 'react';

import {View, FlatList, Text, SafeAreaView} from 'react-native';

import Screen1Icon from '../../assets/images/onb1.svg';
import Screen2Icon from '../../assets/images/onb2.svg';
import Screen3Icon from '../../assets/images/onb3.svg';
import Screen4Icon from '../../assets/images/onb4.svg';

import styles, {screenStyles, paginationStyle} from './styles';
import {scaledSize} from '../../styles';
import globalStyles from '../../styles/globalStyles';

class Onboarding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePageIndex: 0,
      screens: [
        {
          id: 0,
          title: 'Smart book filter',
          description:
            'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beataet.',
          icon: (
            <Screen1Icon height={scaledSize(872)} width={scaledSize(945)} />
          ),
        },
        {
          id: 1,
          title: 'Dark and white theme',
          description:
            'Nemo enim ipsam voluptatem, quia sit, aspernatur aut odit aut fugit, sed corporis quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt.',
          icon: (
            <Screen2Icon height={scaledSize(900)} width={scaledSize(965)} />
          ),
        },
        {
          id: 2,
          title: 'Private Messages for Book Lovers',
          description:
            'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid commodi consequatur autem vel eum iure.',
          icon: (
            <Screen3Icon height={scaledSize(982)} width={scaledSize(921)} />
          ),
        },
        {
          id: 3,
          title: 'Authorship books',
          description:
            'Nemo enim ipsam voluptatem, quia sit, aspernatur aut odit aut fugit, sed corporis quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt.',
          icon: (
            <Screen4Icon height={scaledSize(982)} width={scaledSize(921)} />
          ),
        },
      ],
    };
  }

  onViewableItemsChanged = ({viewableItems, changed}) => {
    const ind = viewableItems.length > 0 ? viewableItems[0].index : 0;
    this.setState({activePageIndex: ind});
  };

  renderPaginationDots = () => {
    const {activePageIndex} = this.state;
    return (
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {[0, 1, 2, 3].map((item, index) => (
          <View
            key={index.toString()}
            style={
              item === activePageIndex
                ? paginationStyle.activeDot
                : paginationStyle.inactiveDot
            }
          />
        ))}
      </View>
    );
  };

  handlePressNext = () => {
    const {activePageIndex} = this.state;

    if (activePageIndex < 3) {
      this.scorllL.scrollToIndex({index: activePageIndex + 1, animated: true});
    }
  };

  handlePressSkip = () => {
    const {navigation} = this.props;
    navigation.navigate('Preload');
  };

  render() {
    const {screens, activePageIndex} = this.state;
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.container}>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <View>
              <FlatList
                ref={(ref) => (this.scorllL = ref)}
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                horizontal
                data={screens}
                renderItem={({item}) => (
                  <View style={screenStyles.container}>
                    <View style={screenStyles.content}>
                      <Text style={styles.headerText}>{item.title}</Text>
                      <Text style={styles.descriptionText}>
                        {item.description}
                      </Text>
                      <View
                        style={{
                          marginTop: scaledSize(194),
                          alignItems: 'center',
                        }}>
                        {item.icon}
                      </View>
                    </View>
                  </View>
                )}
                onViewableItemsChanged={this.onViewableItemsChanged}
                viewabilityConfig={{
                  itemVisiblePercentThreshold: 50,
                }}
                keyExtractor={(item, index) => index.toString()}
                style={{height: scaledSize(1704)}}
              />
            </View>
            <View style={paginationStyle.container}>
              <Text
                style={globalStyles.regularText}
                onPress={this.handlePressSkip}>
                SKIP
              </Text>
              {this.renderPaginationDots()}
              {activePageIndex === 3 ? (
                <Text
                  style={globalStyles.regularText}
                  onPress={this.handlePressSkip}>
                  SKIP
                </Text>
              ) : (
                <Text
                  style={globalStyles.regularText}
                  onPress={this.handlePressNext}>
                  NEXT
                </Text>
              )}
            </View>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

export default Onboarding;
