import EStyleSheet from 'react-native-extended-stylesheet';

import {fonts} from '../../../constants';
import {scaledSize} from '../../../styles';

const styles = EStyleSheet.create({
  container: {
    paddingTop: 10,
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
  topProgressContainer: {
    paddingHorizontal: scaledSize(80),
    alignItems: 'center',
    justifyContent: 'center',
    height: scaledSize(120),
  },
  percentageTextStyle: {
    fontFamily: fonts.circeRegular,
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10,
  },
});

export default styles;
