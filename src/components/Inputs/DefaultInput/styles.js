import EStyleSheet from 'react-native-extended-stylesheet';
import {scaledSize} from '../../../styles';

export default EStyleSheet.create({
  inpContainer: {
    height: scaledSize(160),
    borderWidth: scaledSize(5),
    borderBottomWidth: scaledSize(5),
    borderRadius: scaledSize(30),
    paddingHorizontal: scaledSize(64),
    borderColor: '$inputBorder',
    backgroundColor: 'white',
  },
  container: {
    paddingHorizontal: 0,
    marginVertical: scaledSize(30),
    //borderBottomWidth: 0,
  },
});
