import EStyleSheet from 'react-native-extended-stylesheet';
import fonts from '../../../constants/fonts';
import {scaledSize} from '../../../styles';

export default EStyleSheet.create({
  btnTitle: {
    fontFamily: fonts.circeBold,
    fontSize: scaledSize(38),
  },
  btnContainer: {
    height: scaledSize(95),
    width: scaledSize(320),
    borderRadius: scaledSize(50),
    backgroundColor: '$buttonBackground',
  },
});
