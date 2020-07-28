import EStyleSheet from 'react-native-extended-stylesheet';
import {fonts} from '../../constants';
import {scaledSize} from '../../styles';

export default EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '$background',
  },
  text: {
    fontFamily: fonts.circeRegular,
    fontSize: scaledSize(40),
    color: '$regularText',
  },
  bookContainer: {
    flex: 1,
    marginVertical: scaledSize(40),
  },
  header: {
    fontFamily: fonts.circeBold,
    fontSize: scaledSize(48),
    color: '$regularText',
  },
  paginationText: {
    marginVertical: scaledSize(40),
    fontFamily: fonts.circeRegular,
    fontSize: scaledSize(36),
    color: '$regularText',
  },
});
