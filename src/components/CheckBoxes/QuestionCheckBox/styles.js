import EStyleSheet from 'react-native-extended-stylesheet';

import {fonts, colors} from '../../../constants';
import {scaledSize} from '../../../styles';

export default EStyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: scaledSize(20),
  },
  title: {
    fontFamily: fonts.circeRegular,
    fontSize: scaledSize(42),
    color: '$questionText',
  },
  checkBoxWrapperStyle: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '$inputBorder',
    width: scaledSize(100),
    height: scaledSize(100),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  checkBoxContainerStyle: {
    margin: 0,
    padding: 0,
  },
});
