import EStyleSheet from 'react-native-extended-stylesheet';

import {scaledSize} from '../../../styles';
import {fonts} from '../../../constants';

export default EStyleSheet.create({
  container: {
    backgroundColor: '#3884c3',
    paddingHorizontal: scaledSize(82),
    paddingVertical: scaledSize(25),
  },
  block: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  usernameStyle: {
    fontFamily: fonts.circeRegular,
    fontSize: scaledSize(48),
    color: 'white',
  },
  headerStyle: {
    fontFamily: fonts.circeBold,
    fontSize: scaledSize(60),
    color: 'white',
  },
  settingsIconContainer: {
    marginLeft: scaledSize(94),
  },
});
