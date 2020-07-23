import EStyleSheet from 'react-native-extended-stylesheet';
import {Dimensions} from 'react-native';
import fonts from '../../constants/fonts';
import {scaledSize} from '../../styles';

export const screenStyles = EStyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    paddingHorizontal: scaledSize(82),
  },
});

export const paginationStyle = EStyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: scaledSize(82),
    marginTop: scaledSize(100),
  },
  activeDot: {
    width: scaledSize(40),
    height: scaledSize(40),
    borderRadius: scaledSize(20),
    backgroundColor: '#df9964',
    marginHorizontal: scaledSize(25),
  },
  inactiveDot: {
    backgroundColor: '#c1d6ea',
    width: scaledSize(40),
    height: scaledSize(40),
    borderRadius: scaledSize(20),
    marginHorizontal: scaledSize(25),
  },
});

export default EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '$background',
  },
  headerText: {
    fontFamily: fonts.circeBold,
    fontSize: scaledSize(70),
    color: '$text',
  },
  descriptionText: {
    fontFamily: fonts.circeRegular,
    fontSize: scaledSize(48),
    color: '$text',
  },
});
