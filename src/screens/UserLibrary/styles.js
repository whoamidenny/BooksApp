import EStyleSheet from 'react-native-extended-stylesheet';

import {fonts} from '../../constants';
import {scaledSize} from '../../styles';

export default EStyleSheet.create({
  image: {
    width: scaledSize(275),
    height: scaledSize(430),
    borderRadius: scaledSize(10),
    overflow: 'hidden',
  },
  book: {
    fontFamily: fonts.circeBold,
    fontSize: scaledSize(30),
  },
  author: {fontFamily: fonts.circeRegular, fontSize: scaledSize(26)},
});
