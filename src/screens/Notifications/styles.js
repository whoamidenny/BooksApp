import EStyleSheet from 'react-native-extended-stylesheet';
import {scaledSize} from '../../styles';

export default EStyleSheet.create({
  messageContainer: {
    marginVertical: scaledSize(25),
    backgroundColor: '$messageBackground',
  },
});
