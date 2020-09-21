import EStyleSheet from 'react-native-extended-stylesheet';

import {fonts} from '../../../constants';
import {scaledSize} from '../../../styles';

const styles = EStyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: '$background',
  },
  title: {
    fontFamily: fonts.circeBold,
    fontSize: scaledSize(60),
    textAlign: 'center',
    color: '$questionText',
  },
  subtitle: {
    fontFamily: fonts.circeRegular,
    fontSize: scaledSize(38),
    textAlign: 'center',
    color: '$questionText',
  },
});

export default styles;
