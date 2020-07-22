import EStyleSheet from 'react-native-extended-stylesheet';
import {scaledSize} from '../../../styles';
import fonts from '../../../constants/fonts';

export default EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '$background',
  },
  mainBlock: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomBlock: {
    flex: 1,
    justifyContent: 'space-around',
  },
  hintText: {
    fontFamily: fonts.circeRegular,
    textAlign: 'center',
    color: '$text',
    fontSize: scaledSize(40),
  },
  linkText: {
    color: '$link',
  },
});
