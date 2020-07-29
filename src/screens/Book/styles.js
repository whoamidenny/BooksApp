import EStyleSheet from 'react-native-extended-stylesheet';
import {scaledSize} from '../../styles';
import {fonts} from '../../constants';

export default EStyleSheet.create({
  containerStyle: {
    flexGrow: 1,
    backgroundColor: '$background',
    paddingBottom: scaledSize(80),
  },
  topBlock: {
    flexDirection: 'row',
    paddingHorizontal: scaledSize(80),
    paddingVertical: scaledSize(50),
  },
  blockContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: scaledSize(10),
  },
  introductionContainer: {
    paddingHorizontal: scaledSize(80),
  },
  tagsContainer: {
    flex: 1,
  },
  imageBookStyle: {
    width: scaledSize(320),
    height: scaledSize(500),
    backgroundColor: 'gray',
    borderRadius: 5,
    marginRight: scaledSize(50),
  },
  bookNameStyle: {
    fontFamily: fonts.circeBold,
    fontSize: scaledSize(38),
    color: '$messageText',
  },
  bookAuthorNameStyle: {
    fontFamily: fonts.circeRegular,
    fontSize: scaledSize(30),
    color: '$messageText',
  },
  introductionTitleStyle: {
    fontFamily: fonts.circeRegular,
    fontSize: scaledSize(48),
    color: '$messageText',
    marginVertical: 5,
  },
  introductionTextStyle: {
    fontFamily: fonts.circeRegular,
    fontSize: scaledSize(36),
    color: '$messageText',
  },
  bottomContainer: {
    paddingHorizontal: scaledSize(80),
  },
});
