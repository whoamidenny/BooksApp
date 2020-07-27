import React, {useState, useEffect} from 'react';

import {
  View,
  Text,
  FlatList,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import {LibraryHeader} from '../../components/Headers';

import styles from './styles';

import {scaledSize} from '../../styles';

function UserLibrary({navigation}) {
  const [booksList, setBooksList] = useState([
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
  ]);

  useEffect(() => {
    const newBooksList = [...booksList];
    if (booksList.length % 2 !== 0) {
      for (var i = 0; i < booksList.length % 2; i++) {
        newBooksList.push({
          id: booksList.length + i,
          book: null,
          author: null,
          image: null,
        });
      }
    }

    setBooksList(newBooksList);
  }, []);

  function onPressBook() {
    navigation.navigate('Reader');
  }

  return (
    <View style={styles.container}>
      <LibraryHeader />
      <View style={{flex: 1}}>
        <FlatList
          numColumns={3}
          data={booksList}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.bookContainer}
              onPress={onPressBook}>
              <Image
                source={item.image}
                style={styles.image}
                resizeMode="contain"
              />
              <View>
                <Text style={styles.book}>{item.book}</Text>
                <Text style={styles.author}>{item.author}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{
            paddingHorizontal: scaledSize(80),
          }}
        />
      </View>
    </View>
  );
}

export default UserLibrary;
