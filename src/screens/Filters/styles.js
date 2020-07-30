import EStyleSheet from 'react-native-extended-stylesheet';
import {scaledSize} from '../../styles';

export default EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '$background',
  },
  title: {
    fontSize: scaledSize(38),
  },
  iconStyle: {
    width: scaledSize(100),
    height: scaledSize(100),
  },
});
