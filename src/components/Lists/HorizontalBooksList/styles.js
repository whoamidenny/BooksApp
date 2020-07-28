import EStyleSheet from 'react-native-extended-stylesheet';
import {scaledSize} from '../../../styles';
import {fonts} from '../../../constants';

export default EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '$background',
    marginVertical: scaledSize(40),
  },
  itemContainer: {
    marginRight: scaledSize(40),
  },
  firstItemContainer: {
    marginRight: scaledSize(40),
    marginLeft: scaledSize(80),
  },
  imageStyle: {
    width: scaledSize(441),
    height: scaledSize(701),
    backgroundColor: 'gray',
    borderRadius: 5,
  },
  titleStyle: {
    fontFamily: fonts.circeRegular,
    fontSize: scaledSize(48),
    color: '$headerText',
    marginLeft: scaledSize(80),
    marginBottom: scaledSize(10),
  },
  bookNameStyle: {
    marginTop: scaledSize(10),
    fontFamily: fonts.circeBold,
    fontSize: scaledSize(46),
    color: '$headerText',
  },
  authorNameStyle: {
    fontFamily: fonts.circeRegular,
    fontSize: scaledSize(34),
    color: '$headerText',
  },
});
