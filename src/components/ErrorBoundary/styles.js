import {Dimensions, StyleSheet} from 'react-native';

import {fonts} from '../../constants';

export default StyleSheet.create({
  containerMessage: {
    backgroundColor: 'red',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    maxHeight: Dimensions.get('window').height * 0.3,
  },
  messageContainer: {
    backgroundColor: 'red',
    padding: 15,
  },
  messageStyle: {
    fontFamily: fonts.circeBold,
    color: 'white',
    fontSize: 16,
  },
});
