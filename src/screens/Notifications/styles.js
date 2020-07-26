import EStyleSheet from 'react-native-extended-stylesheet';
import {scaledSize} from '../../styles';
import {fonts} from '../../constants';

export default EStyleSheet.create({
  messageContainer: {
    marginVertical: scaledSize(25),
    backgroundColor: '$messageBackground',
    padding: scaledSize(60),
    borderRadius: scaledSize(66),
  },
  messageTitle: {
    fontFamily: fonts.circeBold,
    fontSize: scaledSize(36),
    color: '$messageText',
  },
  messageDescription: {
    fontFamily: fonts.circeRegular,
    fontSize: scaledSize(36),
    color: '$messageText',
  },
  notificationContainer: {
    paddingHorizontal: scaledSize(80),
    backgroundColor: '$background',
  },
});
