import EStyleSheet from 'react-native-extended-stylesheet';
import {scaledSize} from '../../../styles';

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
    width: scaledSize(320),
    height: scaledSize(500),
    backgroundColor: 'gray',
    borderRadius: 5,
  },
});
