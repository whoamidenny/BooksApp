import EStyleSheet from 'react-native-extended-stylesheet';

import {fonts} from '../../../constants';
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
});
