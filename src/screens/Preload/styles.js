import {Dimensions} from 'react-native';
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
    marginVertical: scaledSize(10),
    color: '$questionText',
    marginTop: scaledSize(60),
  },
  choice: {
    fontFamily: fonts.circeRegular,
    fontSize: scaledSize(42),
    color: '$questionText',
  },
  buttonContainerStyle: {
    paddingHorizontal: scaledSize(80),
    flex: 1,
  },
  buttonDiscoverStyle: {
    backgroundColor: '$buttonDiscoverBackground',
  },
  renderScreenContainer: {
    flex: 1,
    paddingHorizontal: scaledSize(80),
  },
  bottomButtonsContainer: {
    flexDirection: 'row',
  },
  topProgressContainer: {
    paddingHorizontal: scaledSize(80),
    alignItems: 'center',
    justifyContent: 'center',
    height: scaledSize(120),
  },
  percentageTextStyle: {
    fontFamily: fonts.circeRegular,
    fontSize: 14,
    textAlign: 'center',
  },

  progressContainer: {
    marginVertical: scaledSize(75),
    alignItems: 'center',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: scaledSize(80),
  },
  bottomAbsoluteContainer: {
    position: 'absolute',
    bottom: 20,
    left: scaledSize(80),
    right: scaledSize(80),
  },
});
