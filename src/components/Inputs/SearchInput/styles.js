import EStyleSheet from 'react-native-extended-stylesheet';
import {scaledSize} from '../../../styles';
import fonts from '../../../constants/fonts';

export default EStyleSheet.create({
  inpContainer: {
    height: scaledSize(110),
    borderRadius: scaledSize(55),
    backgroundColor: 'white',
    borderBottomWidth: 0,
    paddingLeft: 0,
  },
  container: {
    marginVertical: scaledSize(30),
    flex: 1,
    paddingHorizontal: 0,
  },
  inpStyle: {
    fontFamily: fonts.circeRegular,
    fontSize: scaledSize(36),
    paddingHorizontal: 20,
  },
  rightIconContainerStyle: {
    marginHorizontal: scaledSize(20),
  },
});
