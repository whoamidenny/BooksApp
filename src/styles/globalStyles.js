import EStyleSheet from 'react-native-extended-stylesheet';
import {scaledSize} from '.';
import fonts from '../constants/fonts';

export default EStyleSheet.create({
  headerText: {
    fontFamily: fonts.circeBold,
    fontSize: scaledSize(60),
    color: '$headerText',
  },
  regularText: {
    fontFamily: fonts.circeRegular,
    fontSize: scaledSize(46),
    color: '$headerText',
  },
  headerSmallText: {
    fontFamily: fonts.circeRegular,
    fontSize: scaledSize(36),
    color: '$headerText',
  },
});
