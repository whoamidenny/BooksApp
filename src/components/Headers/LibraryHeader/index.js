import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import styles from './styles';

function LibraryHeader() {
  const [navFilters, setFilters] = useState([
    {id: 0, title: 'Want to Read', active: true},
    {id: 1, title: 'Continue Reading', active: false},
    {id: 2, title: 'Finished', active: false},
  ]);

  function onChangeFilter(index) {
    const newNavFilters = navFilters.map((item) =>
      item.id === index ? {...item, active: true} : {...item, active: false},
    );

    setFilters(newNavFilters);
  }

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.block}>
          <View style={styles.headerContainer}>
            <View>
              <FlatList
                horizontal
                data={navFilters}
                renderItem={({item}) => (
                  <TouchableOpacity
                    style={[
                      styles.itemBlock,
                      item.active ? styles.activeItem : {},
                    ]}
                    onPress={() => onChangeFilter(item.id)}>
                    <Text
                      style={[
                        styles.itemText,
                        item.active ? styles.activeText : {},
                      ]}>
                      {item.title}
                    </Text>
                  </TouchableOpacity>
                )}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

export default LibraryHeader;
