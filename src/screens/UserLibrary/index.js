import React, {useState, useEffect} from 'react';

import {View, Text, FlatList, Image, SafeAreaView} from 'react-native';

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
    console.log('BooksList', booksList);
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
    console.log('New Books List', newBooksList);
    setBooksList(newBooksList);
  }, []);

  return (
    <View style={styles.container}>
      <LibraryHeader />
      <View style={{flex: 1}}>
        <FlatList
          numColumns={3}
          data={booksList}
          renderItem={({item}) => (
            <View style={styles.bookContainer}>
              <Image
                source={item.image}
                style={styles.image}
                resizeMode="contain"
              />
              <View>
                <Text style={styles.book}>{item.book}</Text>
                <Text style={styles.author}>{item.author}</Text>
              </View>
            </View>
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
