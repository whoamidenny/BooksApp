import EStyleSheet from 'react-native-extended-stylesheet';

import {fonts} from '../../constants';
import {scaledSize} from '../../styles';

export default EStyleSheet.create({
  bookContainer: {
    flex: 1,
    marginVertical: scaledSize(50),
    alignItems: 'center',
  },
  image: {
    width: scaledSize(275),
    height: scaledSize(430),
    borderRadius: scaledSize(10),
    overflow: 'hidden',
  },
  book: {
    fontFamily: fonts.circeBold,
    fontSize: scaledSize(30),
    color: '$regularText',
  },
  author: {
    fontFamily: fonts.circeRegular,
    fontSize: scaledSize(26),
    color: '$regularText',
  },
  container: {
    flex: 1,
    backgroundColor: '$background',
  },
});
