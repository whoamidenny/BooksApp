import React from 'react';

import {View, Text, FlatList, Image, SafeAreaView} from 'react-native';

import styles from './styles';
import {BaseBlock} from '../../components/Blocks';
import {scaledSize} from '../../styles';

const books = [
  {
    id: 0,
    book: 'Сommodo exepturi',
    author: 'Oliver Knight ',
    image: require('../../assets/images/static/1.png'),
  },
  {
    id: 1,
    book: 'Сommodo exepturi',
    author: 'Oliver Knight ',
    image: require('../../assets/images/static/2.png'),
  },
  {
    id: 2,
    book: 'Сommodo exepturi',
    author: 'Oliver Knight ',
    image: require('../../assets/images/static/3.png'),
  },
  {
    id: 3,
    book: 'Сommodo exepturi',
    author: 'Oliver Knight ',
    image: require('../../assets/images/static/4.png'),
  },
  {
    id: 4,
    book: 'Сommodo exepturi',
    author: 'Oliver Knight ',
    image: require('../../assets/images/static/5.png'),
  },
];

function UserLibrary({navigation}) {
  return (
    <View style={{flex: 1}}>
      <SafeAreaView>
        <View
          style={{
            backgroundColor: '#3884c3',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <View
            style={{
              paddingHorizontal: scaledSize(60),
              paddingVertical: scaledSize(45),
            }}>
            <Text>Want to Read</Text>
          </View>
          <View
            style={{
              paddingHorizontal: scaledSize(60),
              paddingVertical: scaledSize(45),
            }}>
            <Text>Continue Reading</Text>
          </View>
          <View
            style={{
              paddingHorizontal: scaledSize(60),
              paddingVertical: scaledSize(45),
            }}>
            <Text>Finished</Text>
          </View>
        </View>
      </SafeAreaView>
      <FlatList
        numColumns={3}
        data={books}
        renderItem={({item}) => (
          <View
            style={{
              marginVertical: scaledSize(50),
              marginHorizontal: scaledSize(20),
            }}>
            <Image
              source={item.image}
              style={styles.image}
              resizeMode="contain"
            />
            <Text style={styles.book}>{item.book}</Text>
            <Text style={styles.author}>{item.author}</Text>
          </View>
        )}
      />
    </View>
  );
}

export default UserLibrary;
