import EStyleSheet from 'react-native-extended-stylesheet';
import {scaledSize} from '.';
import fonts from '../constants/fonts';

export default EStyleSheet.create({
  headerText: {
    fontFamily: fonts.circeBold,
    fontSize: scaledSize(60),
    color: '$headerText',
  },
});
