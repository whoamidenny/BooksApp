import React, {useState, useEffect} from 'react';

import {
  View,
  Text,
  FlatList,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  StatusBar,
} from 'react-native';

import {LibraryHeader} from '../../components/Headers';

import styles from './styles';

import {scaledSize} from '../../styles';
import {useSelector} from 'react-redux';

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
  const theme = useSelector((state) => state.theme);

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

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // do something
      if (Platform.OS === 'android') {
        StatusBar.setBackgroundColor(theme.$libraryHeader);
        StatusBar.setBarStyle('light-content');
      }
    });

    return unsubscribe;
  }, [navigation]);

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
