import EStyleSheet from 'react-native-extended-stylesheet';
import {scaledSize} from '../../styles';
import {fonts} from '../../constants';

export default EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '$background',
  },
  content: {
    flex: 1,
    paddingHorizontal: scaledSize(80),
  },
  title: {
    fontFamily: fonts.circeBold,
    fontSize: scaledSize(60),
    textAlign: 'center',
    color: '$questionText',
  },
  subtitle: {
    fontFamily: fonts.circeRegular,
    fontSize: scaledSize(38),
    textAlign: 'center',
    color: '$questionText',
  },
  question: {
    fontFamily: fonts.circeBold,
    fontSize: scaledSize(44),
    marginVertical: scaledSize(60),
    color: '$questionText',
  },
  choice: {
    fontFamily: fonts.circeRegular,
    fontSize: scaledSize(42),
    color: '$questionText',
  },
});
