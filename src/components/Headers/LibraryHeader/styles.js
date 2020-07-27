import EStyleSheet from 'react-native-extended-stylesheet';

import {scaledSize} from '../../../styles';
import {fonts} from '../../../constants';

export default EStyleSheet.create({
  container: {
    backgroundColor: '$libraryHeader',
  },
  block: {
    paddingVertical: scaledSize(65),
    backgroundColor: '$libraryHeader',
    alignItems: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: scaledSize(80),
  },

  itemBlock: {
    paddingHorizontal: scaledSize(60),
    paddingVertical: scaledSize(45),
    backgroundColor: 'white',
    borderRadius: scaledSize(80),
  },
  activeItem: {
    backgroundColor: '#6ac3ff',
  },
  itemText: {
    fontFamily: fonts.circeRegular,
    fontSize: scaledSize(32),
    fontWeight: '500',
    color: '#0b1e35',
  },
  activeText: {
    color: 'white',
  },
});
