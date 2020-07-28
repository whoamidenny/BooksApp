import React from 'react';

import {Input, Icon} from 'react-native-elements';

import styles from './styles';

const SearchInput = ({...props}) => (
  <Input
    {...props}
    renderErrorMessage={false}
    placeholderTextColor="#0b1e35"
    inputStyle={styles.inpStyle}
    inputContainerStyle={styles.inpContainer}
    containerStyle={styles.container}
    placeholder="Search for a book title or genre"
    rightIcon={<Icon name="search" type="ionicon" size={20} />}
    rightIconContainerStyle={styles.rightIconContainerStyle}
  />
);

export default SearchInput;
