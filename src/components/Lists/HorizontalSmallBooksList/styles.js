import EStyleSheet from 'react-native-extended-stylesheet';
import {scaledSize} from '../../../styles';
import {fonts} from '../../../constants';

export default EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '$background',
    marginVertical: scaledSize(10),
  },
  titleStyle: {
    fontFamily: fonts.circeRegular,
    fontSize: scaledSize(48),
    color: '$messageText',
    marginVertical: 5,
    paddingHorizontal: scaledSize(80),
  },
  itemContainer: {
    marginRight: scaledSize(40),
  },
  firstItemContainer: {
    marginRight: scaledSize(40),
    marginLeft: scaledSize(80),
  },
  imageStyle: {
    width: scaledSize(320),
    height: scaledSize(500),
    backgroundColor: 'gray',
    borderRadius: 5,
  },
  bookNameStyle: {
    marginTop: scaledSize(10),
    fontFamily: fonts.circeBold,
    fontSize: scaledSize(30),
    color: '$headerText',
  },
  authorNameStyle: {
    fontFamily: fonts.circeRegular,
    fontSize: scaledSize(26),
    color: '$headerText',
  },
});
