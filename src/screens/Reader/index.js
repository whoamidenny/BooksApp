import React, {Component} from 'react';

import {
  View,
  SafeAreaView,
  Text,
  Dimensions,
  FlatList,
  Platform,
  StatusBar,
} from 'react-native';
import * as Progress from 'react-native-progress';
import {connect} from 'react-redux';

import {ReaderHeader} from '../../components/Headers';
import {BaseBlock} from '../../components/Blocks';

import styles from './styles';
import {colors} from '../../constants';
import {scaledSize} from '../../styles';

class Reader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentScreenIndex: 0,
      progress: 0,
      book: {
        countPages: 3,
        pages: [
          {
            id: 0,
            chapter: 'Part I: Crime',
            page:
              'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi',
          },
          {
            id: 1,
            chapter: 'Part II: Pain',
            page:
              'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.\n\nNemo enim ipsam voluptatem, quia sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi',
          },
          {
            id: 2,
            chapter: 'Part III: Plassure',
            page:
              'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi',
          },
        ],
      },
    };
  }

  componentDidMount() {
    const {theme} = this.props;

    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor(theme.$background);
    }
    StatusBar.setBarStyle(
      theme.$theme === 'light' ? 'dark-content' : 'light-content',
    );
  }

  onViewableItemsChanged = ({viewableItems, changed}) => {
    const {screens, book} = this.state;
    const visibleIndex = viewableItems[0].index;

    this.setState({
      currentScreenIndex: visibleIndex,
      progress: (visibleIndex + 1) / book.countPages,
    });
  };

  render() {
    const {book, progress, currentScreenIndex} = this.state;
    return (
      <BaseBlock>
        <ReaderHeader title="Commodo exeputi" />
        <View style={styles.bookContainer}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            horizontal
            onViewableItemsChanged={this.onViewableItemsChanged}
            viewabilityConfig={{
              itemVisiblePercentThreshold: 50,
            }}
            data={book.pages}
            renderItem={({item}) => (
              <View
                style={{
                  width: Dimensions.get('window').width,
                  paddingHorizontal: scaledSize(80),
                }}>
                <Text style={styles.header}>{item.chapter}</Text>
                <Text style={styles.text}>{item.page}</Text>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <View style={{alignItems: 'center'}}>
          <Progress.Bar
            progress={progress}
            width={Dimensions.get('window').width - scaledSize(160)}
            style={styles.progressBarStyle}
            unfilledColor={colors.progressBarBorderColor}
            borderColor={colors.progressBarBorderColor}
            color={'#df9964'}
          />
          <Text style={styles.paginationText}>
            {currentScreenIndex + 1} of {book.countPages}
          </Text>
        </View>
      </BaseBlock>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    theme: state.theme,
  };
};

export default connect(mapStateToProps, null)(Reader);
