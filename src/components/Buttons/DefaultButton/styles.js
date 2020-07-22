import EStyleSheet from 'react-native-extended-stylesheet';
import fonts from '../../../constants/fonts';
import {scaledSize} from '../../../styles';

export default EStyleSheet.create({
  btnTitle: {
    fontFamily: fonts.circeBold,
    fontSize: scaledSize(54),
  },
  btnContainer: {
    height: scaledSize(160),
    borderRadius: scaledSize(80),

    backgroundColor: '$buttonBackground',
  },
});
