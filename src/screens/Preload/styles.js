import EStyleSheet from 'react-native-extended-stylesheet';
import {scaledSize} from '../../styles';

export default EStyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: scaledSize(82),
    marginTop: scaledSize(100),
  },
});
