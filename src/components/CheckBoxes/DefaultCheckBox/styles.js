import EStyleSheet from 'react-native-extended-stylesheet';
import fonts from '../../../constants/fonts';
import {scaledSize} from '../../../styles';

export default EStyleSheet.create({
  container: {
    margin: 0,
    marginVertical: scaledSize(15),
    marginLeft: 0,
    marginRight: 0,
    padding: 0,
    borderWidth: 0,
    backgroundColor: 'transparent',
  },
  text: {
    fontFamily: fonts.circeLight,
    fontWeight: '400',
    color: '$text',
  },
});
