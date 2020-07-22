import EStyleSheet from 'react-native-extended-stylesheet';
import {scaledSize} from '../../../styles';
import fonts from '../../../constants/fonts';

export default EStyleSheet.create({
  bottomContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  forgetText: {
    fontFamily: fonts.circeRegular,
    fontSize: scaledSize(36),
    color: '$text',
  },
  fbButton: {
    height: scaledSize(160),
    borderRadius: scaledSize(80),
    flex: 1,
    marginRight: 10,
    backgroundColor: '#1877f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  googleButton: {
    height: scaledSize(160),
    borderRadius: scaledSize(80),
    flex: 1,
    marginLeft: 10,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialLabel: {
    fontFamily: fonts.circeRegular,
    fontSize: scaledSize(40),
    color: '#0b1e35',
  },
  mainBlock: {
    flex: 1,
    justifyContent: 'space-around',
  },
  regularText: {
    fontFamily: fonts.circeRegular,
    fontSize: scaledSize(36),
    color: '$text',
  },
});
